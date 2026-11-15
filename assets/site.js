(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(pointer: fine)").matches;
  const store = { get(k){ try { return localStorage.getItem(k); } catch { return null; } }, set(k,v){ try { localStorage.setItem(k,v); } catch {} } };

  /* ================= AUDIO ================= */
  // Everything is synthesized with Web Audio — no files to load.
  const Audio = {
    ctx: null, master: null, on: false, pad: null, last: 0,
    scale: [0, 2, 4, 7, 9, 12, 14, 16, 19, 21], // major pentatonic
    init() {
      if (this.ctx) return;
      const C = window.AudioContext || window.webkitAudioContext; if (!C) return;
      this.ctx = new C();
      this.master = this.ctx.createGain(); this.master.gain.value = 0;
      const comp = this.ctx.createDynamicsCompressor();
      // simple feedback delay for a little space
      const delay = this.ctx.createDelay(); delay.delayTime.value = .23;
      const fb = this.ctx.createGain(); fb.gain.value = .28;
      const wet = this.ctx.createGain(); wet.gain.value = .22;
      const lp = this.ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 2400;
      this.master.connect(comp); this.master.connect(delay);
      delay.connect(lp); lp.connect(fb); fb.connect(delay); lp.connect(wet); wet.connect(comp);
      comp.connect(this.ctx.destination);
    },
    set(v) {
      this.init(); if (!this.ctx) return;
      this.on = v; this.ctx.resume();
      const t = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(t);
      this.master.gain.setTargetAtTime(v ? .55 : 0, t, .08);
      v ? this.startPad() : this.stopPad();
    },
    hz(step, base = 523.25) { const s = this.scale[((step % this.scale.length) + this.scale.length) % this.scale.length]; return base * Math.pow(2, s / 12); },
    blip({ f = 880, type = "sine", dur = .12, vol = .12, glide = 0 } = {}) {
      if (!this.on) return;
      const now = this.ctx.currentTime; if (now - this.last < .025) return; this.last = now;
      const o = this.ctx.createOscillator(), g = this.ctx.createGain();
      o.type = type; o.frequency.setValueAtTime(f, now);
      if (glide) o.frequency.exponentialRampToValueAtTime(f * glide, now + dur);
      g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(vol, now + .006); g.gain.exponentialRampToValueAtTime(.0001, now + dur);
      o.connect(g); g.connect(this.master); o.start(now); o.stop(now + dur + .02);
    },
    hover(i = 0) { this.blip({ f: this.hz(i), dur: .18, vol: .07, type: "sine" }); },
    tick() { this.blip({ f: 1800, dur: .03, vol: .05, type: "triangle" }); },
    click() { this.blip({ f: 330, dur: .16, vol: .16, type: "triangle", glide: 2 }); },
    chord() { [0, 2, 4].forEach((s, k) => setTimeout(() => this.blip({ f: this.hz(s + 2, 392), dur: .6, vol: .08 }), k * 70)); },
    startPad() {
      if (this.pad || reduced) return;
      const c = this.ctx, out = c.createGain(); out.gain.value = 0; out.connect(this.master);
      const lp = c.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 500; lp.Q.value = .6; lp.connect(out);
      const oscs = [130.81, 196, 246.94].map((f, i) => { const o = c.createOscillator(); o.type = "sine"; o.frequency.value = f; o.detune.value = (i - 1) * 6; o.connect(lp); o.start(); return o; });
      out.gain.setTargetAtTime(.035, c.currentTime, 1.2);
      this.pad = { out, lp, oscs };
    },
    stopPad() {
      if (!this.pad) return; const { out, oscs } = this.pad, t = this.ctx.currentTime;
      out.gain.setTargetAtTime(0, t, .3); oscs.forEach(o => o.stop(t + 1.5)); this.pad = null;
    },
    // cursor speed opens the pad's filter
    motion(speed, x) {
      if (!this.pad) return;
      const t = this.ctx.currentTime;
      this.pad.lp.frequency.setTargetAtTime(400 + Math.min(speed, 60) * 28, t, .25);
    }
  };

  const soundBtn = $("#sound");
  const setSound = v => {
    Audio.set(v); soundBtn.classList.toggle("on", v); soundBtn.setAttribute("aria-pressed", v);
    $(".lbl", soundBtn).textContent = v ? "sound on" : "sound off"; store.set("sound", v ? "1" : "0");
    if (v) Audio.chord();
  };
  soundBtn.addEventListener("click", () => setSound(!Audio.on));
  addEventListener("keydown", e => { if (e.key.toLowerCase() === "m" && !e.metaKey && !e.ctrlKey && e.target === document.body) setSound(!Audio.on); });

  /* ================= CURSOR ================= */
  const dot = $(".cursor"), ring = $(".cursor-ring"), label = $("span", ring);
  const m = { x: innerWidth / 2, y: innerHeight / 2 }, r = { x: m.x, y: m.y }, prev = { x: m.x, y: m.y };
  let speed = 0;
  if (fine && !reduced) {
    document.body.classList.add("has-cursor");
    addEventListener("pointermove", e => { m.x = e.clientX; m.y = e.clientY; }, { passive: true });
    addEventListener("pointerdown", () => ring.classList.add("is-down"));
    addEventListener("pointerup", () => ring.classList.remove("is-down"));
    document.addEventListener("pointerleave", () => { dot.style.opacity = ring.style.opacity = 0; });
    document.addEventListener("pointerenter", () => { dot.style.opacity = ring.style.opacity = 1; });
  }
  const hoverables = "a, button, .chip";
  document.addEventListener("pointerover", e => {
    const el = e.target.closest(hoverables + ", [data-label], p, h3, .lede");
    ring.classList.remove("is-link", "is-label", "is-text");
    if (!el) return;
    if (el.dataset.label) { ring.classList.add("is-label"); label.textContent = el.dataset.label; }
    else if (el.matches(hoverables)) ring.classList.add("is-link");
    else if (el.matches("p, .lede")) ring.classList.add("is-text");
  });

  // sounds on hover — each interactive element gets its own note
  $$(hoverables).forEach((el, i) => {
    el.addEventListener("pointerenter", () => Audio.hover(i));
    el.addEventListener("click", () => Audio.click());
  });

  /* ================= MAGNETIC ================= */
  $$(".magnetic, .sound, nav a").forEach(el => {
    el.addEventListener("pointermove", e => {
      if (!fine || reduced) return;
      const b = el.getBoundingClientRect();
      const dx = e.clientX - (b.left + b.width / 2), dy = e.clientY - (b.top + b.height / 2);
      const k = el.classList.contains("big") ? .12 : .3;
      el.style.transform = `translate(${dx * k}px, ${dy * k}px)`;
    });
    el.addEventListener("pointerleave", () => { el.style.transform = ""; });
  });

  /* ================= TEXT SCRAMBLE ================= */
  const glyphs = "!<>-_\\/[]{}—=+*^?#abcdefghijklmnopqrstuvwxyz";
  $$("[data-scramble]").forEach(el => {
    const orig = el.textContent; let raf;
    el.addEventListener("pointerenter", () => {
      if (reduced) return; cancelAnimationFrame(raf); let f = 0;
      const run = () => {
        el.textContent = orig.split("").map((c, i) => i < f / 2 ? c : glyphs[Math.random() * glyphs.length | 0]).join("");
        if (f++ < orig.length * 2) { if (f % 3 === 0) Audio.tick(); raf = requestAnimationFrame(run); } else el.textContent = orig;
      };
      run();
    });
  });

  /* ================= HERO SPLIT ================= */
  let ci = 0;
  $$("[data-split]").forEach(line => {
    const walk = node => [...node.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(word => {
          if (!word) return;
          if (/^\s+$/.test(word)) { frag.appendChild(document.createTextNode(" ")); return; }
          const wEl = document.createElement("span"); wEl.style.whiteSpace = "nowrap"; wEl.setAttribute("aria-hidden", "true");
          [...word].forEach(c => {
            const s = document.createElement("span"); s.className = "ch"; s.textContent = c;
            s.style.transitionDelay = `${.25 + ci++ * .028}s`;
            const idx = ci;
            s.addEventListener("pointerenter", () => { s.style.transitionDelay = "0s"; Audio.hover(idx); });
            wEl.appendChild(s);
          });
          frag.appendChild(wEl);
        });
        n.replaceWith(frag);
      } else walk(n);
    });
    walk(line);
  });
  void document.body.offsetHeight; // commit the hidden state before revealing
  setTimeout(() => document.body.classList.add("ready"), 80);

  /* ================= COUNTERS ================= */
  // <span data-count="153" data-suffix="+" data-dec="0"> counts up when it scrolls into view
  const countIO = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; countIO.unobserve(e.target);
    const el = e.target, to = +el.dataset.count, dec = +(el.dataset.dec || 0), pre = el.dataset.prefix || "", suf = el.dataset.suffix || "";
    const show = v => el.textContent = pre + v.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
    if (reduced) return show(to);
    const t0 = performance.now(), D = 1400; let lastTick = 0;
    const step = now => {
      const p = Math.min(1, (now - t0) / D), v = to * (1 - Math.pow(1 - p, 4));
      show(v); if (now - lastTick > 70 && p < 1) { Audio.tick(); lastTick = now; }
      if (p < 1) requestAnimationFrame(step); else show(to);
    };
    requestAnimationFrame(step);
  }), { threshold: .6 });
  $$("[data-count]").forEach(el => countIO.observe(el));

  /* ================= SCROLL REVEALS ================= */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
  $$(".rv").forEach((el, i) => { el.style.transitionDelay = `${(i % 5) * 60}ms`; io.observe(el); });

  // word-by-word lighting for the about lede, driven by scroll position
  const lede = $("[data-words]");
  if (lede) lede.innerHTML = lede.textContent.trim().split(/\s+/).map(w => `<span class="w">${w}</span>`).join(" ");
  const words = lede ? $$(".w", lede) : []; let lit = 0;
  const lightWords = () => {
    if (!lede) return;
    const b = lede.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * .85 - b.top) / (b.height + innerHeight * .35)));
    const n = Math.round(p * words.length);
    if (n !== lit) { if (n > lit) Audio.tick(); words.forEach((w, i) => w.classList.toggle("lit", i < n)); lit = n; }
  };

  // active nav link
  const navLinks = $$("header nav a");
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach(s => spy.observe(s));

  /* ================= WORK PREVIEW ================= */
  const pv = $(".preview"), pc = pv && $("canvas", pv), px = pc && pc.getContext("2d");
  const pvPos = { x: 0, y: 0 }; let pvHue = 160, pvT = 0, pvOn = false;
  $$(".row").forEach((row, i) => {
    row.addEventListener("pointerenter", () => { pvHue = +row.dataset.hue; pvOn = fine && !reduced; pv.classList.toggle("on", pvOn); Audio.hover(i + 3); });
    row.addEventListener("pointerleave", () => { pvOn = false; pv.classList.remove("on"); });
  });
  const drawPreview = () => {
    pvT += .012; const w = pc.width, h = pc.height;
    const g = px.createLinearGradient(0, 0, w, h);
    g.addColorStop(0, `hsl(${pvHue},70%,${18}%)`); g.addColorStop(1, `hsl(${pvHue + 40},60%,8%)`);
    px.fillStyle = g; px.fillRect(0, 0, w, h);
    for (let k = 0; k < 3; k++) {
      px.beginPath();
      for (let x = 0; x <= w; x += 6) {
        const y = h / 2 + Math.sin(x * .012 + pvT * (1 + k * .4) + k) * (40 + k * 20) * Math.sin(pvT * .6 + k);
        x ? px.lineTo(x, y) : px.moveTo(x, y);
      }
      px.strokeStyle = `hsla(${pvHue + k * 25},90%,70%,${.55 - k * .14})`; px.lineWidth = 2; px.stroke();
    }
  };

  /* ================= DOT FIELD (reacts to cursor) ================= */
  const fc = $("#field"), fx = fc.getContext("2d"); let dots = [], dpr = 1;
  const buildField = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    fc.width = innerWidth * dpr; fc.height = innerHeight * dpr; fc.style.width = innerWidth + "px"; fc.style.height = innerHeight + "px";
    const gap = innerWidth < 700 ? 34 : 42; dots = [];
    for (let y = gap / 2; y < innerHeight; y += gap) for (let x = gap / 2; x < innerWidth; x += gap) dots.push({ ox: x, oy: y, x, y });
  };
  buildField(); addEventListener("resize", buildField);
  const drawField = () => {
    fx.setTransform(dpr, 0, 0, dpr, 0, 0); fx.clearRect(0, 0, innerWidth, innerHeight);
    const R = 160;
    for (const d of dots) {
      const dx = d.ox - r.x, dy = d.oy - r.y, dist = Math.hypot(dx, dy);
      let tx = d.ox, ty = d.oy, a = .13, s = 1;
      if (fine && dist < R) { const f = (1 - dist / R) ** 2; tx += dx / (dist || 1) * f * 22; ty += dy / (dist || 1) * f * 22; a += f * .7; s += f * 1.4; }
      d.x += (tx - d.x) * .12; d.y += (ty - d.y) * .12;
      fx.fillStyle = a > .3 ? `rgba(95,227,176,${a})` : `rgba(237,237,234,${a})`;
      fx.beginPath(); fx.arc(d.x, d.y, s, 0, 6.283); fx.fill();
    }
  };

  /* ================= MAIN LOOP ================= */
  const loop = () => {
    const k = reduced ? 1 : .16;
    r.x += (m.x - r.x) * k; r.y += (m.y - r.y) * k;
    dot.style.transform = `translate3d(${m.x}px, ${m.y}px, 0)`;
    ring.style.transform = `translate3d(${r.x}px, ${r.y}px, 0)`;
    speed = speed * .9 + Math.hypot(m.x - prev.x, m.y - prev.y) * .1; prev.x = m.x; prev.y = m.y;
    Audio.motion(speed, m.x / innerWidth);
    if (pvOn && pv) {
      pvPos.x += (m.x - pvPos.x) * .1; pvPos.y += (m.y - pvPos.y) * .1;
      const tilt = Math.max(-6, Math.min(6, (m.x - pvPos.x) * .08));
      pv.style.transform = `translate3d(calc(${pvPos.x}px - 50% + 180px), calc(${pvPos.y}px - 50%), 0) rotate(${tilt}deg) scale(1)`;
      drawPreview();
    } else { pvPos.x = m.x; pvPos.y = m.y; }
    if (!reduced) drawField();
    requestAnimationFrame(loop);
  };
  if (reduced) drawField();
  loop();
  addEventListener("scroll", lightWords, { passive: true }); lightWords();

  /* ================= SMALL THINGS ================= */
  const toast = $(".toast"); let tt;
  const say = msg => { toast.textContent = msg; toast.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove("on"), 2200); };
  $("#email")?.addEventListener("click", async e => {
    const addr = e.currentTarget.dataset.email;
    try { await navigator.clipboard.writeText(addr); say("email copied ✓"); Audio.chord(); }
    catch { location.href = "mailto:" + addr; }
  });

  const clock = $("#clock");
  const fmt = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, timeZoneName: "short" });
  const tickClock = () => { if (clock) clock.textContent = fmt.format(new Date()); };
  tickClock(); setInterval(tickClock, 1000);
  $$(".yr-now").forEach(el => el.textContent = new Date().getFullYear());

  // title nudges you back when you leave the tab
  const t0 = document.title;
  document.addEventListener("visibilitychange", () => { document.title = document.hidden ? "← come back" : t0; });
})();
