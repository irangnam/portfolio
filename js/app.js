(() => {
  const P = window.PROJECTS, ME = window.PLAYER;
  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* intro + about */
  $("#bio").textContent = `디자이너 ${ME.nameKo}입니다. ${ME.bio}`;
  $("#bio2").textContent = `${ME.education[0]}에서 공부하며, 지금은 ${ME.quests[0][1]}에서 ${ME.quests[0][2].split(" · ")[0]}로 일하고 있습니다.`;
  $("#facts").innerHTML =
    `<dt>Focus</dt><dd>${esc(ME.focus)}</dd>` +
    `<dt>Education</dt><dd>${ME.education.map(esc).join("<br>")}</dd>` +
    `<dt>Fields</dt><dd class="chips">${[...new Set(P.flatMap(p => p.cats))].map(c => `<span class="chip">${esc(c)}</span>`).join("")}</dd>`;
  $("#xp").innerHTML = ME.quests.map(q => `<li><b>${esc(q[0])}</b><span><strong>${esc(q[1])}</strong><small>${esc(q[2])}</small></span></li>`).join("");
  $("#aw").innerHTML = ME.trophies.map(t => `<li><b>${esc(t[0])}</b><span><strong>${esc(t[1])}</strong></span></li>`).join("");
  $("#mail").href = $("#mail2").href = "mailto:" + ME.email; $("#mail2").textContent = ME.email;
  $("#ig").href = "https://instagram.com/" + ME.instagram;

  /* work */
  function cover(p, i) {
    const ph = el("div", "ph", esc(p.title));
    if (!p.cover) return ph;
    const img = new Image(); img.alt = ""; img.loading = "lazy";
    if (p.coverFit === "contain") img.className = "contain";
    img.onerror = () => img.replaceWith(ph); img.onload = () => (p.coverOk = true); img.src = p.cover; return img;
  }
  let cat = "All";
  const cats = ["All", ...new Set(P.flatMap(p => p.cats))];
  function renderFeature() {                             // one project marked featured:true gets a wide banner above the grid
    const p = P.find(q => q.featured), box = $("#feature"); box.innerHTML = "";
    if (!p) return;
    const a = el("a", "feature rv"); a.href = "#/work/" + p.slug;
    const src = p.banner || p.cover;
    if (src) { const im = new Image(); im.alt = ""; im.onerror = () => im.remove(); im.src = src; a.append(im); }
    a.append(el("div", "ft", `<span class="tag">Latest${p.live ? " · Try it live" : ""}</span><h3>${esc(p.title)}</h3><p>${esc(p.sub || "")}</p><span class="more">View project →</span>`),
      el("span", "fd", `${esc(p.cats.join(" · "))}<br>${esc(p.date)}`));
    box.append(a);
  }
  function renderWork() {
    const f = $("#filters"); f.innerHTML = "";
    cats.forEach(c => { const b = el("button", "", esc(c)); b.setAttribute("role", "tab"); b.setAttribute("aria-selected", c === cat); b.onclick = () => { cat = c; renderWork(); }; f.append(b); });
    const g = $("#cards"); g.innerHTML = "";
    P.forEach((p, i) => {
      if (cat !== "All" && !p.cats.includes(cat)) return;
      const a = el("a", "card rv"); a.href = "#/work/" + p.slug;
      const th = el("div", "thumb"); th.append(cover(p, i));
      if (p.live) th.append(el("span", "tag", "Try it live"));
      a.append(th, el("div", "meta", `<h3>${esc(p.title)}</h3><span class="cats">${esc(p.cats.join(" · "))}<br>${esc(p.date)}</span>`));
      g.append(a);
    });
    watch();
  }

  /* detail sheet */
  function openSheet(slug) {
    const i = P.findIndex(p => p.slug === slug), s = $("#sheet");
    if (i < 0) { s.hidden = true; document.body.style.overflow = ""; return; }
    const p = P[i], nx = P[(i + 1) % P.length], bn = p.banner || (p.coverFit !== "contain" && p.coverOk ? p.cover : "");
    s.innerHTML = `
      <div class="sheet-bar"><a href="#work">← All work</a><span>${String(i + 1).padStart(2, "0")} / ${String(P.length).padStart(2, "0")}</span></div>
      ${bn ? `<div class="sheet-banner" style="background-image:url('${esc(bn)}')"></div>` : ""}
      <div class="sheet-in${bn ? " has-banner" : ""}">
        <p class="label">${esc(p.sub)}</p>
        <h1>${esc(p.title)}</h1>
        <div class="sheet-top">
          <p class="desc">${esc(p.desc)}</p>
          <dl class="kv"><dt>Date</dt><dd>${esc(p.date)}</dd><dt>Field</dt><dd class="chips">${p.cats.map(c => `<span class="chip">${esc(c)}</span>`).join("")}</dd>${p.client ? `<dt>Client</dt><dd>${esc(p.client)}</dd>` : ""}${p.role ? `<dt>Role</dt><dd>${esc(p.role)}</dd>` : ""}${p.tools ? `<dt>Tools</dt><dd>${esc(p.tools)}</dd>` : ""}</dl>
        </div>
        ${p.live ? `<div class="live-box"><p>춤추는 세이아를 보거나, 웹캠으로 직접 움직여 보세요.</p><a class="btn" href="${esc(p.live)}?v=1794753934">Try it live →</a></div>` : ""}
        <div class="gal" id="gal"></div>
        ${p.process ? `<section class="proc"><div class="sec-head"><h2>Workflow</h2><span class="num">${p.process.length} steps</span></div><ol>${p.process.map((s, k) => `<li><span class="n">${String(k + 1).padStart(2, "0")}</span><div><h3>${esc(s.t)}</h3><p>${esc(s.d)}</p>${s.img ? `<img loading="lazy" src="${esc(s.img)}" alt="${esc(s.t)}" onerror="this.remove()">` : ""}</div></li>`).join("")}</ol></section>` : ""}
        <div class="next"><span>Next project</span><a href="#/work/${nx.slug}">${esc(nx.title)} →</a></div>
      </div>`;
    const gal = $("#gal");
    if (p.video) {
      const f = el("figure", "wide"), v = el("video"); v.controls = true; v.loop = true; v.playsInline = true; v.preload = "metadata"; v.muted = true; if (p.poster) v.poster = p.poster; v.src = p.video;
      v.onerror = () => { f.className = "soon"; f.textContent = "Dance cut — coming soon"; };
      f.append(v); gal.append(f);
    }
    (p.images || []).forEach((src, k) => {
      const f = el("figure", p.tallImages ? "tall" : "");
      const im = new Image(); im.alt = `${p.title} — image ${k + 1}`; im.onerror = () => f.remove();
      im.onload = () => { if (!p.tallImages && im.naturalWidth > im.naturalHeight * 1.15) f.classList.add("wide"); };   // landscape fills the row, portrait sits two-up
      im.src = src;
      f.append(im); gal.append(f);
    });
    if (!p.video && !(p.images || []).length) gal.append(el("div", "soon", "Images coming soon"));
    s.hidden = false; s.scrollTop = 0; document.body.style.overflow = "hidden";
  }
  function route() {
    const m = location.hash.match(/^#\/work\/(.+)$/);
    if (m) openSheet(decodeURIComponent(m[1]));
    else { $("#sheet").hidden = true; document.body.style.overflow = ""; }
  }
  addEventListener("hashchange", route);
  addEventListener("keydown", e => { if (e.key === "Escape" && !$("#sheet").hidden) location.hash = "#work"; });

  /* reveal on scroll */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
  function watch() { document.querySelectorAll(".rv:not(.in)").forEach(n => io.observe(n)); }
  document.querySelectorAll(".sec-head,.statement,.kv,.rows li,.contact").forEach(n => n.classList.add("rv"));

  renderFeature(); renderWork(); route();
})();
