import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { VRMLoaderPlugin } from "@pixiv/three-vrm";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { loadBakedMotion } from "./motion.js?v=1794753934";

const MP = "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";
const FACE_MODEL = "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task";
const POSE_MODEL = "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task";

const $ = s => document.querySelector(s);
const status = t => ($("#status").textContent = t);
const clamp01 = v => Math.min(1, Math.max(0, v));
const V = (x, y, z) => new THREE.Vector3(x, y, z);

/* ── scene ── */
const host = $("#stage3d");
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
host.append(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a0b);
const camera = new THREE.PerspectiveCamera(26, 1, 0.1, 80);
const sun = new THREE.DirectionalLight(0xffffff, Math.PI);
sun.position.set(0.6, 1.5, 2);
scene.add(sun, new THREE.AmbientLight(0xffffff, 0.6));
// floor: a soft glow disc plus a contact shadow that follows her hips, so it reads that she stands on the ground
function radial() {                                   // white → black falloff, used as an alpha map (no colour in the texture, so no banding specks)
  const c = document.createElement("canvas"); c.width = c.height = 256; const g = c.getContext("2d"), gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  gr.addColorStop(0, "#fff"); gr.addColorStop(0.5, "#555"); gr.addColorStop(1, "#000"); g.fillStyle = gr; g.fillRect(0, 0, 256, 256); return new THREE.CanvasTexture(c);
}
const fall = radial(), soft = (color, opacity) => new THREE.MeshBasicMaterial({ color, alphaMap: fall, transparent: true, opacity, depthWrite: false });
const floor = new THREE.Mesh(new THREE.CircleGeometry(1.6, 48), soft(0xff4d9d, 0.1));
floor.rotation.x = -Math.PI / 2; floor.position.y = 0.006;
const shadow = new THREE.Mesh(new THREE.CircleGeometry(0.34, 32), soft(0x000000, 0.55));
shadow.rotation.x = -Math.PI / 2; shadow.position.y = 0.009;
const glow = new THREE.Mesh(new THREE.PlaneGeometry(7, 7), soft(0xff4d9d, 0.05));
glow.position.set(0, 1.0, -2.2);
scene.add(floor, shadow, glow);
// soft bloom: bright areas (skin, gems, gold) glow a little, which also softens the surface
const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4 }));
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(new THREE.Vector2(4, 4), 0.16, 0.5, 0.93));
composer.addPass(new OutputPass());
resize();
const RIM = 0;                                          // back-light strength on hair / arms / outfit edges (0 = off)
const camGoal = { y: 1.37, z: 1.62, look: 1.33 }, camNow = { ...camGoal };
function resize() {
  const w = host.clientWidth, h = host.clientHeight;
  renderer.setSize(w, h, false); composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix();
}
addEventListener("resize", resize);

/* ── avatar ── */
let vrm = null, mixer = null, danceAction = null, earMorphs = [];
const B = {}, FING = { L: [], R: [] }, LEN = {};
const hipRest = new THREE.Vector3();
const loader = new GLTFLoader();
loader.register(p => new VRMLoaderPlugin(p));
loader.load("assets/seia_web.vrm?v=1794753934", g => {
  vrm = g.userData.vrm;
  vrm.scene.traverse(o => {
    o.frustumCulled = false;
    if (o.isMesh && o.morphTargetDictionary && "Ear_Back" in o.morphTargetDictionary) earMorphs.push([o, o.morphTargetDictionary.Ear_Back, o.morphTargetDictionary.Ear_Perk]);
  });
  const seen = new Set();
  vrm.scene.traverse(o => (Array.isArray(o.material) ? o.material : [o.material]).forEach(m => {
    if (!m || seen.has(m) || !m.isMToonMaterial) return; seen.add(m);
    if (!/Mouth/i.test(m.name)) m.shadeColorFactor?.set(1, 1, 1);   // shaded side = lit side (the mouth keeps its dark inside)
    for (const k of ["map", "shadeMultiplyTexture", "emissiveMap"]) if (m[k]) { m[k].anisotropy = renderer.capabilities.getMaxAnisotropy(); m[k].needsUpdate = true; }
    m.matcapFactor?.set(0, 0, 0); m.rimLightingMixFactor = 0;
    if (RIM && /Hair|Body|Hand/i.test(m.name)) {        // thin bright edge only at grazing angles; the face stays clean
      m.parametricRimColorFactor?.set(1.0 * RIM, 0.78 * RIM, 0.88 * RIM); m.parametricRimFresnelPowerFactor = 4.5; m.parametricRimLiftFactor = 0;
    } else m.parametricRimColorFactor?.set(0, 0, 0);
  }));
  scene.add(vrm.scene);
  const g2 = n => vrm.humanoid.getNormalizedBoneNode(n);
  Object.assign(B, {
    hips: g2("hips"), spine: g2("spine"), chest: g2("upperChest") || g2("chest"), neck: g2("neck"), head: g2("head"),
    lsh: g2("leftShoulder"), rsh: g2("rightShoulder"), lu: g2("leftUpperArm"), ll: g2("leftLowerArm"), lh: g2("leftHand"),
    ru: g2("rightUpperArm"), rl: g2("rightLowerArm"), rh: g2("rightHand")
  });
  for (const [s, side] of [["L", "left"], ["R", "right"]])
    for (const f of ["Index", "Middle", "Ring", "Little"]) FING[s].push(["Proximal", "Intermediate", "Distal"].map(j => g2(side + f + j)));
  vrm.scene.updateMatrixWorld(true);
  const wp = b => b.getWorldPosition(V(0, 0, 0));
  LEN.u = wp(B.lu).distanceTo(wp(B.ll)); LEN.l = wp(B.ll).distanceTo(wp(B.lh));
  hipRest.copy(B.hips.position);
  mixer = new THREE.AnimationMixer(vrm.scene);
  $("#bar i").style.width = "100%";
  document.querySelectorAll("[data-needs-vrm]").forEach(b => (b.disabled = false));
  const go = $("#go"); go.disabled = false; go.textContent = "Use my camera";
  document.body.classList.add("loaded");
}, e => { if (e.total) $("#bar i").style.width = (e.loaded / e.total * 100).toFixed(0) + "%"; },
  err => { console.error(err); status("Couldn't load the avatar file."); });

/* ── pose helpers ── */
const X = V(1, 0, 0), NX = V(-1, 0, 0), qa = new THREE.Quaternion(), qb = new THREE.Quaternion();
const FWD = V(0, 0, 1), DOWN = V(0, -1, 0), mA = new THREE.Matrix4(), mB = new THREE.Matrix4(), vx = V(0, 0, 0), vy = V(0, 0, 0), vz = V(0, 0, 0);
function frame(m, dir, ref) {                           // orthonormal frame: x along dir, y as close to ref as possible
  vx.copy(dir).normalize(); vz.crossVectors(vx, ref);
  if (vz.lengthSq() < 1e-8) vz.crossVectors(vx, Math.abs(vx.y) < 0.9 ? DOWN : FWD);
  vz.normalize(); vy.crossVectors(vz, vx); return m.makeBasis(vx, vy, vz);
}
// Turn a T-pose bone so its length points along `dir` and its reference side faces `ref` (both in model space).
// Fixing the reference side is what keeps elbows and wrists from twisting the wrong way.
function orient(bone, restDir, restRef, dir, ref, k) {
  frame(mA, restDir, restRef); frame(mB, dir, ref);
  qa.setFromRotationMatrix(mB.multiply(mA.transpose())).premultiply(vrm.scene.quaternion);   // model space → world
  bone.parent.getWorldQuaternion(qb).invert(); qb.multiply(qa);
  bone.quaternion.slerp(qb, k);
}
function ik(upper, target, pole) {                      // two-bone IK → [upper dir, lower dir]
  const S = upper.getWorldPosition(V(0, 0, 0)), to = target.clone().sub(S);
  const d = Math.min(LEN.u + LEN.l - 1e-3, Math.max(Math.abs(LEN.u - LEN.l) + 1e-3, to.length())), dir = to.normalize();
  const cosA = (LEN.u * LEN.u + d * d - LEN.l * LEN.l) / (2 * LEN.u * d), sinA = Math.sqrt(Math.max(0, 1 - cosA * cosA));
  const p = pole.clone().addScaledVector(dir, -pole.dot(dir)).normalize();
  const elbow = S.clone().addScaledVector(dir, LEN.u * cosA).addScaledVector(p, LEN.u * sinA);
  return [elbow.clone().sub(S).normalize(), S.addScaledVector(dir, d).sub(elbow).normalize()];
}
const HIP_L = [V(0.75, -0.62, -0.1).normalize(), V(-0.5, -0.5, 0.62).normalize()];
const mir = v => V(-v.x, v.y, v.z);

/* A pose spec: { head:[pitch,yaw,roll], spineX, spineZ, hipsY, lift, L, R, fistL, fistR, peaceR, expr }
   L / R are either [upperDir, lowerDir] or { ref:"head"|"chest", at:Vector3, pole:Vector3 } (hand placed by IK). */
const EMOTES = {
  wink: t => ({                                         // idol peace sign by the eye
    head: [0, -0.12, -0.16], hipsY: -Math.abs(Math.sin(t * 5)) * 0.01, peaceR: 1,
    R: { ref: "head", at: V(-0.17, 0.0, 0.12), pole: V(-0.7, -0.7, 0.1) }, handR: { f: V(0.15, 0.98, 0), p: V(0, 0, 1) },
    L: HIP_L, handL: { f: V(-0.6, -0.75, 0.3), p: V(-0.3, 0.2, -1) },
    expr: { blinkLeft: 1, happy: 0.8 }
  })
};
const EMOTE_LEN = 3.6;

/* ── tracking ── */
let face = null, pose = null, tracking = false, lastVideoTime = -1, mode = "idle", emote = null, emoteT0 = 0;
const tracked = { head: [0, 0, 0], L: null, R: null, expr: {} };
const mouse = { x: 0, y: 0 };
addEventListener("pointermove", e => { mouse.x = e.clientX / innerWidth - .5; mouse.y = e.clientY / innerHeight - .5; });
const cam = $("#cam");
$("#showcam").onchange = e => (cam.style.visibility = e.target.checked ? "visible" : "hidden");

$("#go").onclick = async () => {
  const go = $("#go");
  if (tracking) { stopCam(); return; }
  stopDance(); go.disabled = true;
  try {
    status("Loading the tracker…");
    const { FilesetResolver, FaceLandmarker, PoseLandmarker } = await import(`${MP}/vision_bundle.mjs`);
    const files = await FilesetResolver.forVisionTasks(`${MP}/wasm`);
    face ??= await FaceLandmarker.createFromOptions(files, {
      baseOptions: { modelAssetPath: FACE_MODEL, delegate: "GPU" }, runningMode: "VIDEO",
      outputFaceBlendshapes: true, outputFacialTransformationMatrixes: true, numFaces: 1
    });
    pose ??= await PoseLandmarker.createFromOptions(files, {
      baseOptions: { modelAssetPath: POSE_MODEL, delegate: "GPU" }, runningMode: "VIDEO", numPoses: 1
    });
    status("Asking for your camera…");
    cam.srcObject = await navigator.mediaDevices.getUserMedia({ video: { width: 640, height: 480, facingMode: "user" }, audio: false });
    await cam.play();
    cam.hidden = false; tracking = true; mode = "track"; document.body.classList.add("cam-on");
    go.textContent = "Turn camera off"; status("");
  } catch (err) {
    console.error(err);
    status(err && err.name === "NotAllowedError" ? "Camera is blocked — allow it in the address bar." : "Couldn't start the camera.");
    go.textContent = "Use my camera";
  }
  go.disabled = false;
};
function stopCam() {
  tracking = false; if (mode === "track") mode = "idle";
  cam.srcObject?.getTracks().forEach(t => t.stop());
  cam.srcObject = null; cam.hidden = true; document.body.classList.remove("cam-on");
  $("#go").textContent = "Use my camera"; status("");
}
const m4 = new THREE.Matrix4(), eul = new THREE.Euler();
function track(now) {
  if (cam.currentTime === lastVideoTime || cam.readyState < 2) return;
  lastVideoTime = cam.currentTime;
  const f = face.detectForVideo(cam, now);
  if (f.facialTransformationMatrixes?.length) {
    m4.fromArray(f.facialTransformationMatrixes[0].data); eul.setFromRotationMatrix(m4, "YXZ");
    tracked.head = [eul.x * 0.9, -eul.y, -eul.z];            // mirror: keep pitch, flip yaw and roll
  }
  if (f.faceBlendshapes?.length) {
    const s = {}; for (const c of f.faceBlendshapes[0].categories) s[c.categoryName] = c.score;
    const smile = (s.mouthSmileLeft + s.mouthSmileRight) / 2, frown = (s.mouthFrownLeft + s.mouthFrownRight) / 2;
    const browDown = (s.browDownLeft + s.browDownRight) / 2, wide = (s.eyeWideLeft + s.eyeWideRight) / 2;
    const happy = clamp01(smile * 1.5 - 0.15);
    tracked.expr = {
      blinkLeft: clamp01(s.eyeBlinkRight * 1.4 - 0.1) * (1 - happy * 0.6), blinkRight: clamp01(s.eyeBlinkLeft * 1.4 - 0.1) * (1 - happy * 0.6),
      aa: clamp01(s.jawOpen * 1.7 - 0.05), ou: clamp01(s.mouthPucker * 1.3 - 0.3), oh: clamp01(s.mouthFunnel * 1.5),
      ih: clamp01(((s.mouthStretchLeft + s.mouthStretchRight) / 2) * 1.5), happy,
      angry: clamp01(browDown * 1.6 - 0.35) * (1 - happy), sad: clamp01(frown * 2.2 - 0.1) * (1 - happy),
      surprised: clamp01(s.browInnerUp * 0.9 + wide * 1.2 - 0.45) * (1 - happy)
    };
  }
  tracked.L = tracked.R = null;
  if ($("#arms").checked) {
    const w = pose.detectForVideo(cam, now).worldLandmarks?.[0];
    const side = (sh, el, wr) => {                         // user's side drives SEIA's opposite side (mirror)
      if (!w || w[sh].visibility < .6 || w[el].visibility < .55) return null;
      const u = V(-(w[el].x - w[sh].x), -(w[el].y - w[sh].y), -(w[el].z - w[sh].z)).normalize();
      return [u, w[wr].visibility > .5 ? V(-(w[wr].x - w[el].x), -(w[wr].y - w[el].y), -(w[wr].z - w[el].z)).normalize() : u.clone()];
    };
    tracked.L = side(12, 14, 16); tracked.R = side(11, 13, 15);
  }
}

/* ── idle: breathing, swaying arms, blinking, ear flutter ── */
let blinkT = 2, earT = 4, earUntil = 0;
function idleSpec(t, dt) {
  blinkT -= dt; const b = blinkT < 0.12 ? 1 : 0; if (blinkT < 0) blinkT = 1.8 + Math.random() * 3.4;
  earT -= dt; if (earT < 0) { earT = 5 + Math.random() * 6; earUntil = t + 0.55; }
  const a = Math.sin(t * 0.9) * 0.05, c = Math.sin(t * 0.9 + 1.3) * 0.05;
  return {
    head: [mouse.y * 0.35 + Math.sin(t * 0.7) * 0.02, mouse.x * 0.6, mouse.x * -0.08 + Math.sin(t * 0.5) * 0.025],
    spineX: Math.sin(t * 1.5) * 0.014, spineZ: Math.sin(t * 0.45) * 0.012, hipsY: Math.sin(t * 1.5) * 0.003,
    L: [V(0.6 + a, -0.8, 0.05 + c).normalize(), V(0.42 + a * 1.6, -0.86, 0.28 + c).normalize()],
    R: [V(-0.6 + c, -0.8, 0.05 + a).normalize(), V(-0.42 + c * 1.6, -0.86, 0.28 + a).normalize()],
    expr: { blinkLeft: b, blinkRight: b, happy: 0.22 }
  };
}

/* ── loop ── */
const clock = new THREE.Clock(), qHead = new THREE.Quaternion(), qT = new THREE.Quaternion(), qHalf = new THREE.Quaternion(), ID = new THREE.Quaternion();
const EXPR = ["blink", "blinkLeft", "blinkRight", "aa", "ou", "oh", "ih", "happy", "angry", "sad", "surprised"], cur = {};
const sm = { spineX: 0, spineZ: 0, hipsY: 0, lift: 0, fistL: 0, fistR: 0, peaceR: 0 };
const refPos = V(0, 0, 0);
function applySpec(s, dt) {
  const k = 1 - Math.pow(0.0005, dt), kf = 1 - Math.pow(0.002, dt);
  for (const n in sm) sm[n] += ((s[n] || 0) - sm[n]) * kf;
  B.hips.position.set(hipRest.x, hipRest.y + sm.hipsY, hipRest.z); B.hips.quaternion.slerp(ID, kf);
  qT.setFromEuler(new THREE.Euler(s.head[0], s.head[1], s.head[2], "YXZ")); qHead.slerp(qT, k);
  qHalf.copy(ID).slerp(qHead, 0.5); B.neck.quaternion.copy(qHalf); B.head.quaternion.copy(qHalf);
  B.spine.rotation.set(sm.spineX * 0.6, qHead.y * 0.25, qHead.z * 0.3 + sm.spineZ);
  B.chest.rotation.set(sm.spineX * 0.4, 0, 0);
  B.lsh.rotation.set(0, 0, sm.lift); B.rsh.rotation.set(0, 0, -sm.lift);
  vrm.scene.updateMatrixWorld(true);
  const inv = vrm.scene.quaternion.clone().invert();
  for (const [key, up, lo, hand, rest, sx] of [["L", B.lu, B.ll, B.lh, X, 1], ["R", B.ru, B.rl, B.rh, NX, -1]]) {
    let d = s[key];
    if (d && !Array.isArray(d)) {                        // hand placed relative to the head or chest
      (d.ref === "head" ? B.head : B.chest).getWorldPosition(refPos);
      const goal = refPos.add(d.at.clone().applyQuaternion(vrm.scene.quaternion));
      if (s.te != null) {                                // travel out in front of the body first, and leave the same way
        const w = Math.min(1, s.te / 0.6, (EMOTE_LEN - s.te) / 0.55), e = w * w * (3 - 2 * w);
        const via = B.chest.getWorldPosition(V(0, 0, 0)).add(V(0.3 * sx, -0.16, 0.36).applyQuaternion(vrm.scene.quaternion));
        goal.lerpVectors(via, goal, Math.max(0, e));
      }
      d = ik(up, goal, d.pole.clone().applyQuaternion(vrm.scene.quaternion)).map(v => v.applyQuaternion(inv));
    }
    const h = s["hand" + key] || {}, f = h.f || d[1], p = h.p || V(-sx, 0, 0.25);
    orient(up, rest, FWD, d[0], d[1], k); up.updateMatrixWorld(true);       // elbow hinge faces the forearm
    orient(lo, rest, DOWN, d[1], p, k); lo.updateMatrixWorld(true);         // forearm twist follows the palm
    orient(hand, rest, DOWN, f, p, kf);
  }
  const curl = (list, sign, amt) => list.forEach(j => j && (j.rotation.z = sign * amt));
  FING.L.forEach(f => curl(f, -1, sm.fistL * 1.25));
  FING.R.forEach((f, i) => curl(f, 1, Math.max(sm.fistR, i > 1 ? sm.peaceR : 0) * 1.25));
  const ke = 1 - Math.pow(0.00001, dt);
  for (const n of EXPR) { cur[n] = (cur[n] || 0) + ((s.expr[n] || 0) - (cur[n] || 0)) * ke; vrm.expressionManager?.setValue(n, cur[n]); }
}
function loop() {
  requestAnimationFrame(loop);
  const dt = Math.min(clock.getDelta(), 0.05), t = clock.elapsedTime;
  if (vrm) {
    if (mode === "dance" && danceAction) {
      mixer.update(dt);
      const d = danceAction.getClip().duration, now = danceAction.time % d;
      $("#pl-bar").style.width = (now / d * 100).toFixed(1) + "%"; $("#pl-now").textContent = mmss(now);
      blinkT -= dt; const b = blinkT < 0.12 ? 1 : 0; if (blinkT < 0) blinkT = 2 + Math.random() * 3;
      for (const n of EXPR) { cur[n] = n === "happy" ? 0.6 : n === "blink" ? b : 0; vrm.expressionManager?.setValue(n, cur[n]); }
    } else {
      if (tracking && face) { try { track(performance.now()); } catch (e) { console.warn(e); } }
      const idle = idleSpec(t, dt);
      let s = idle;
      if (emote) { const te = t - emoteT0; if (te > EMOTE_LEN) emote = null; else s = { ...EMOTES[emote](te), te }; }
      else if (tracking) s = { ...idle, head: tracked.head, L: tracked.L || idle.L, R: tracked.R || idle.R, expr: tracked.expr };
      if (!s.L) s.L = idle.L; if (!s.R) s.R = idle.R;
      applySpec(s, dt);
    }
    vrm.update(dt);
    B.hips.getWorldPosition(refPos); shadow.position.x = refPos.x; shadow.position.z = refPos.z;
    if (t < earUntil && mode !== "dance") {              // quick ear shake, applied after expressions
      const w = 0.5 + 0.5 * Math.sin(t * 46);
      for (const [mesh, back, perk] of earMorphs) { mesh.morphTargetInfluences[back] = w * 0.9; if (perk != null) mesh.morphTargetInfluences[perk] = (1 - w) * 0.6; }
    }
  }
  camGoal.z = (mode === "dance" ? 4.6 : 1.62) * (camera.aspect < 0.8 ? 1.5 : 1); camGoal.y = mode === "dance" ? 1.05 : 1.37; camGoal.look = mode === "dance" ? 0.92 : 1.33;
  for (const n in camNow) camNow[n] += (camGoal[n] - camNow[n]) * 0.06;
  camera.position.set(0, camNow.y, camNow.z); camera.lookAt(0, camNow.look, 0);
  composer.render();
}
loop();

/* ── buttons ── */
const danceBtn = $("#dance");
const mmss = t => Math.floor(t / 60) + ":" + String(Math.floor(t % 60)).padStart(2, "0");
const ICON = { pause: "M3 2h4v12H3zM9 2h4v12H9z", play: "M4 2l10 6-10 6z" };
function setToggle() {
  const p = danceAction && danceAction.paused, b = $("#pl-toggle");
  b.querySelector("path").setAttribute("d", p ? ICON.play : ICON.pause); b.setAttribute("aria-label", p ? "Resume dance" : "Pause dance");
  document.body.classList.toggle("paused", !!p);
}
$("#pl-toggle").onclick = () => { if (danceAction) { danceAction.paused = !danceAction.paused; setToggle(); } };
function stopDance() {
  if (mode !== "dance") return;
  document.body.classList.remove("dancing", "paused");
  mode = "idle"; mixer.stopAllAction(); vrm.humanoid.resetNormalizedPose(); B.hips.position.copy(hipRest);
  danceBtn.textContent = "Dance";
}
danceBtn.onclick = async () => {
  if (mode === "dance") { stopDance(); return; }
  if (tracking) stopCam();
  danceBtn.disabled = true;
  try {
    if (!danceAction) { status("Loading the dance…"); danceAction = mixer.clipAction(await loadBakedMotion("assets/seia/dance_baked.json?v=1794753934", vrm)); }
    emote = null; danceAction.reset().play(); mode = "dance";
    danceAction.paused = false; document.body.classList.remove("paused"); document.body.classList.add("dancing");
    $("#pl-len").textContent = mmss(danceAction.getClip().duration); setToggle();
    danceBtn.textContent = "Stop"; status("");
  } catch (e) { console.error(e); status("Couldn't load the dance."); }
  danceBtn.disabled = false;
};
document.querySelectorAll("[data-expr]").forEach(b => (b.onclick = () => {
  stopDance(); emote = b.dataset.expr; emoteT0 = clock.elapsedTime;
}));
let dragX = null;
renderer.domElement.style.cursor = "grab";
renderer.domElement.onpointerdown = e => { dragX = e.clientX; renderer.domElement.setPointerCapture(e.pointerId); };
renderer.domElement.onpointermove = e => { if (dragX != null && vrm) { vrm.scene.rotation.y += (e.clientX - dragX) * 0.008; dragX = e.clientX; } };
renderer.domElement.onpointerup = () => (dragX = null);
renderer.domElement.ondblclick = () => vrm && (vrm.scene.rotation.y = 0);
addEventListener("pagehide", () => cam.srcObject?.getTracks().forEach(t => t.stop()));
