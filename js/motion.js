// Plays a dance that was retargeted and baked in Unity (Humanoid) onto the VRM's normalized bones.
// dance_baked.json: { fps, frames, bones:[Unity HumanBodyBones names], rot: base64 Float32 [frame][bone][x,y,z,w], hips: base64 Float32 [frame][x,y,z] }
// Rotations are already in VRM 1.0 space; hips are offsets from the rest position, with the floor height corrected.
import * as THREE from "three";

const RENAME = { ThumbProximal: "ThumbMetacarpal", ThumbIntermediate: "ThumbProximal" };   // Unity → VRM 1.0 thumb names
function vrmName(n) {
  for (const k in RENAME) if (n.endsWith(k)) { n = n.slice(0, -k.length) + RENAME[k]; break; }
  return n[0].toLowerCase() + n.slice(1);
}
function f32(b64) {
  const bin = atob(b64), u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return new Float32Array(u8.buffer);
}

export async function loadBakedMotion(url, vrm) {
  const d = await (await fetch(url)).json(), rot = f32(d.rot), hips = f32(d.hips), N = d.frames, B = d.bones.length;
  const times = new Float32Array(N); for (let i = 0; i < N; i++) times[i] = i / d.fps;
  const tracks = [];
  d.bones.forEach((name, b) => {
    const node = vrm.humanoid.getNormalizedBoneNode(vrmName(name));
    if (!node) return;
    const v = new Float32Array(N * 4);
    for (let i = 0; i < N; i++) v.set(rot.subarray((i * B + b) * 4, (i * B + b) * 4 + 4), i * 4);
    tracks.push(new THREE.QuaternionKeyframeTrack(`${node.name}.quaternion`, times, v));
    if (name === "Hips") {
      const rest = node.position.clone(), p = new Float32Array(N * 3);
      for (let i = 0; i < N; i++) { p[i * 3] = rest.x + hips[i * 3]; p[i * 3 + 1] = rest.y + hips[i * 3 + 1]; p[i * 3 + 2] = rest.z + hips[i * 3 + 2]; }
      tracks.push(new THREE.VectorKeyframeTrack(`${node.name}.position`, times, p));
    }
  });
  return new THREE.AnimationClip("dance", (N - 1) / d.fps, tracks);
}
