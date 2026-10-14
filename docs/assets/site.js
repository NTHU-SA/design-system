/* 學生申訴協力系統：示範網站共用腳本（主題切換、手機選單、Toast、物理堆疊） */
(function () {
  "use strict";
  var Site = window.Site = {};
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function store(key, value) {
    try { if (value === undefined) return localStorage.getItem(key); localStorage.setItem(key, value); } catch (e) { return null; }
  }
  Site.store = store;

  /* ── 主題：示範站預設亮色，按鈕在亮／暗之間切換 ── */
  var root = document.documentElement;
  root.setAttribute("data-theme", store("demo-theme") === "dark" ? "dark" : "light");
  var SUN = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var MOON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></svg>';
  function paintThemeButtons() {
    var dark = root.getAttribute("data-theme") === "dark";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (b) {
      b.innerHTML = dark ? MOON : SUN;
      b.setAttribute("aria-label", dark ? "切換成亮色模式" : "切換成暗色模式");
    });
  }

  /* ── 手機選單 ── */
  function setupMenu() {
    var btn = document.querySelector("[data-menu-toggle]"), menu = document.getElementById("mobile-menu");
    if (!btn || !menu) return;
    var OPEN = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    var CLOSE = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>';
    function set(open) {
      menu.hidden = !open; btn.innerHTML = open ? CLOSE : OPEN;
      btn.setAttribute("aria-expanded", String(open)); btn.setAttribute("aria-label", open ? "關閉選單" : "開啟選單");
      document.body.style.overflow = open ? "hidden" : "";
    }
    set(false);
    btn.addEventListener("click", function () { set(menu.hidden); });
    window.addEventListener("resize", function () { if (window.innerWidth > 992 && !menu.hidden) set(false); });
  }

  /* ── Toast ── */
  var toastTimer = 0;
  Site.toast = function (text) {
    var t = document.getElementById("toast");
    if (!t) { t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg><span></span>';
    t.querySelector("span").textContent = text;
    t.hidden = false;
    clearTimeout(toastTimer);
    var hide = function () { toastTimer = setTimeout(function () { t.hidden = true; }, 3200); };
    t.onmouseenter = function () { clearTimeout(toastTimer); };
    t.onmouseleave = hide;
    hide();
  };
  Site.copy = function (text, done) {
    var ok = function () { Site.toast(done || "已複製"); };
    try { navigator.clipboard.writeText(text).then(ok, function () { Site.toast("無法複製，請手動選取：" + text); }); }
    catch (e) { Site.toast("無法複製，請手動選取：" + text); }
  };

  /* ── 形狀庫（0～w、0～h 的座標；body 是物理碰撞用的凸多邊形或圓） ── */
  var PI = Math.PI;
  function arcPts(cx, cy, r, a0, a1, n) { var out = []; for (var i = 0; i <= n; i++) { var a = a0 + (a1 - a0) * i / n; out.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); } return out; }
  function roundedPoly(pts, r) {
    var d = "";
    for (var i = 0; i < pts.length; i++) {
      var p0 = pts[(i - 1 + pts.length) % pts.length], p1 = pts[i], p2 = pts[(i + 1) % pts.length];
      var v1 = [p0[0] - p1[0], p0[1] - p1[1]], v2 = [p2[0] - p1[0], p2[1] - p1[1]];
      var l1 = Math.hypot(v1[0], v1[1]), l2 = Math.hypot(v2[0], v2[1]);
      var a = [p1[0] + v1[0] / l1 * r, p1[1] + v1[1] / l1 * r], b = [p1[0] + v2[0] / l2 * r, p1[1] + v2[1] / l2 * r];
      d += (i === 0 ? "M" : "L") + a[0].toFixed(2) + " " + a[1].toFixed(2) + "Q" + p1[0] + " " + p1[1] + " " + b[0].toFixed(2) + " " + b[1].toFixed(2);
    }
    return d + "Z";
  }
  var SQ = [[0, 0], [100, 0], [100, 100], [0, 100]];
  var LIB = Site.SHAPES = {
    circle: { w: 100, h: 100, d: "M0 50a50 50 0 1 0 100 0a50 50 0 1 0 -100 0Z", circle: true },
    semi: { w: 100, h: 50, d: "M0 50A50 50 0 0 1 100 50Z", pts: arcPts(50, 50, 50, PI, 2 * PI, 10) },
    arch: { w: 80, h: 100, d: "M0 100V40A40 40 0 0 1 80 40V100Z", pts: [[0, 100]].concat(arcPts(40, 40, 40, PI, 2 * PI, 8), [[80, 100]]) },
    pill: { w: 100, h: 40, d: "M20 0H80A20 20 0 0 1 80 40H20A20 20 0 0 1 20 0Z", pts: arcPts(80, 20, 20, -PI / 2, PI / 2, 6).concat(arcPts(20, 20, 20, PI / 2, 1.5 * PI, 6)) },
    roundsq: { w: 100, h: 100, d: roundedPoly(SQ, 22), pts: SQ },
    quarter: { w: 100, h: 100, d: "M0 100V0A100 100 0 0 1 100 100Z", pts: [[0, 100]].concat(arcPts(0, 100, 100, -PI / 2, 0, 8)) },
    dshape: { w: 100, h: 100, d: "M0 0H50A50 50 0 0 1 50 100H0Z", pts: [[0, 0]].concat(arcPts(50, 50, 50, -PI / 2, PI / 2, 8), [[0, 100]]) },
    tri: { w: 100, h: 92, d: "M50 0L100 92H0Z", pts: [[50, 0], [100, 92], [0, 92]] },
    star: { w: 100, h: 100, d: "M50 0C54 34 66 46 100 50C66 54 54 66 50 100C46 66 34 54 0 50C34 46 46 34 50 0Z", pts: [[50, 0], [100, 50], [50, 100], [0, 50]] }
  };
  /* 炭黑圓形色塊上的線條圖示（24 格線、2px 筆畫），代表學生會的各個系統 */
  var ICONS = Site.ICONS = {
    chat: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z",
    door: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M3 21h18M14 12h.01",
    vote: "M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3ZM8 12l3 3 5-6",
    megaphone: "M4 10v4h3l6 4V6l-6 4ZM17 9a4 4 0 0 1 0 6",
    search: "M18 11a7 7 0 1 1-14 0a7 7 0 1 1 14 0ZM20 20l-4-4",
    pin: "M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11ZM14.5 10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 1 1 5 0Z"
  };
  Site.shapeSVG = function (kind, color, size) {
    var L = LIB[kind];
    return '<svg viewBox="0 0 ' + L.w + " " + L.h + '" width="' + (size || L.w) + '" height="' + ((size || L.w) * L.h / L.w) + '" aria-hidden="true"><path d="' + L.d + '" fill="' + color + '"/></svg>';
  };

  /* ── 物理堆疊：同一層、互相碰撞，往上堆 ──
     opts.shapes: [形狀, 顏色 token, 寬, 高, 角度]；寬高以 1200px 寬的舞台為基準，依舞台寬度縮放
     opts.left: 0～1，左側這段寬度留給文字，色塊不會進入
     opts.start: "visible"（捲到時才掉落）或 "load"
     opts.max: 依寬度決定最多幾個色塊 */
  Site.pile = function (el, opts) {
    var M = window.Matter;
    if (!M) return;
    var canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    el.appendChild(canvas);
    var ctx = canvas.getContext("2d");
    var state = null, raf = 0, started = false, lastW = 0;

    function colorOf(token) { return getComputedStyle(root).getPropertyValue(token).trim() || token; }

    function build(instant) {
      cancelAnimationFrame(raf); raf = 0;
      if (state) state.timers.forEach(clearTimeout);
      var W = el.clientWidth, H = el.clientHeight, dpr = Math.min(window.devicePixelRatio || 1, 2);
      lastW = W;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      var engine = M.Engine.create({ enableSleeping: true });
      engine.gravity.y = 1.1;
      var leftX = (typeof opts.left === "function" ? opts.left(W) : (opts.left || 0)) * W;
      var wall = { isStatic: true, friction: 0.8 };
      M.Composite.add(engine.world, [
        M.Bodies.rectangle(W / 2, H + 50, W * 3, 100, wall),
        M.Bodies.rectangle(W + 50, H / 2 - H, 100, H * 4, wall),
        M.Bodies.rectangle(leftX - 50, H / 2 - H, 100, H * 4, wall)
      ]);
      var scale = Math.max(opts.minScale || 0.5, Math.min(1, W / 1200));
      var max = typeof opts.max === "function" ? opts.max(W) : opts.shapes.length;
      var specs = opts.shapes.slice(0, max);
      state = { engine: engine, items: [], W: W, H: H, dpr: dpr, timers: [], grab: null, idle: 0 };

      function make(s, i, y) {
        var L = LIB[s[0]], w = s[2] * scale, h = s[3] * scale, sx = w / L.w, sy = h / L.h;
        var span = Math.max(1, W - leftX - w);
        var x = leftX + w / 2 + ((i * 0.618034 + Math.random() * 0.35) % 1) * span;
        var o = { restitution: 0.12, friction: 0.7, frictionStatic: 1, frictionAir: 0.012, density: 0.0016 };
        var body, c;
        if (L.circle) { body = M.Bodies.circle(x, y, w / 2, o); c = { x: w / 2, y: h / 2 }; }
        else {
          var verts = L.pts.map(function (q) { return { x: q[0] * sx, y: q[1] * sy }; });
          c = M.Vertices.centre(verts);
          body = M.Bodies.fromVertices(x, y, [verts], o);
        }
        M.Body.setAngle(body, ((s[4] || 0) + (Math.random() - 0.5) * 24) * PI / 180);
        return { body: body, path: new Path2D(L.d), sx: sx, sy: sy, c: c, color: s[1], w: w, h: h, icon: s[5] && L.circle ? new Path2D(ICONS[s[5]]) : null };
      }
      if (instant) {
        specs.forEach(function (s, i) { var it = make(s, i, -i * 90 * scale - 60); state.items.push(it); M.Composite.add(engine.world, it.body); });
        for (var n = 0; n < 900; n++) { M.Engine.update(engine, 1000 / 60); if (n > 120 && allAsleep()) break; }
        draw();
      } else {
        specs.forEach(function (s, i) {
          state.timers.push(setTimeout(function () {
            var it = make(s, i, -s[3] * scale); state.items.push(it); M.Composite.add(engine.world, it.body); wake();
          }, 80 + i * 170));
        });
        wake();
      }
    }
    function allAsleep() { return state.items.every(function (it) { return it.body.isSleeping; }); }
    function draw() {
      var s = state;
      ctx.setTransform(s.dpr, 0, 0, s.dpr, 0, 0); ctx.clearRect(0, 0, s.W, s.H);
      s.items.forEach(function (it) {
        var b = it.body;
        ctx.save(); ctx.translate(b.position.x, b.position.y); ctx.rotate(b.angle); ctx.translate(-it.c.x, -it.c.y); ctx.scale(it.sx, it.sy);
        ctx.fillStyle = colorOf(it.color); ctx.fill(it.path); ctx.restore();
        // 圖示只放在圓形上，而且永遠保持正向，不跟著色塊旋轉
        if (it.icon) {
          var g = it.w * 0.42;
          ctx.save(); ctx.translate(b.position.x - g / 2, b.position.y - g / 2); ctx.scale(g / 24, g / 24);
          ctx.strokeStyle = colorOf("--shape-glyph"); ctx.lineWidth = 2; ctx.lineCap = "round"; ctx.lineJoin = "round"; ctx.stroke(it.icon);
          ctx.restore();
        }
      });
    }
    function loop() {
      M.Engine.update(state.engine, 1000 / 60); draw();
      var pending = state.timers.length && state.items.length < state.timers.length;
      state.idle = (allAsleep() && !state.grab && !pending) ? state.idle + 1 : 0;
      raf = state.idle > 30 ? 0 : requestAnimationFrame(loop);
    }
    function wake() { state.idle = 0; if (!raf) raf = requestAnimationFrame(loop); }

    function start() { if (started) return; started = true; build(reduceMotion); }
    if (opts.start === "visible" && "IntersectionObserver" in window && !reduceMotion) {
      var io = new IntersectionObserver(function (es) { if (es.some(function (e) { return e.isIntersecting; })) { io.disconnect(); start(); } }, { threshold: 0.35 });
      io.observe(el);
    } else start();

    // 滑鼠可以拖動、拋出；手指點一下讓色塊彈起
    if (!reduceMotion) {
      el.classList.add("grab");
      var hit = function (e) {
        var r = canvas.getBoundingClientRect(), pt = { x: e.clientX - r.left, y: e.clientY - r.top };
        var bodies = state ? state.items.map(function (it) { return it.body; }) : [];
        var found = M.Query.point(bodies, pt);
        return { pt: pt, body: found[found.length - 1] };
      };
      canvas.addEventListener("pointerdown", function (e) {
        if (!state) return;
        var h = hit(e);
        if (!h.body) return;
        M.Sleeping.set(h.body, false);
        if (e.pointerType === "mouse") {
          state.grab = M.Constraint.create({ pointA: h.pt, bodyB: h.body, pointB: { x: h.pt.x - h.body.position.x, y: h.pt.y - h.body.position.y }, stiffness: 0.12, damping: 0.1, length: 0 });
          M.Composite.add(state.engine.world, state.grab);
          canvas.setPointerCapture(e.pointerId); el.style.cursor = "grabbing";
        } else {
          M.Body.setVelocity(h.body, { x: (Math.random() - 0.5) * 4, y: -9 });
          M.Body.setAngularVelocity(h.body, (Math.random() - 0.5) * 0.2);
        }
        wake();
      });
      canvas.addEventListener("pointermove", function (e) { if (state && state.grab) { var r = canvas.getBoundingClientRect(); state.grab.pointA = { x: e.clientX - r.left, y: e.clientY - r.top }; } });
      var release = function () { if (state && state.grab) { M.Composite.remove(state.engine.world, state.grab); state.grab = null; el.style.cursor = ""; wake(); } };
      canvas.addEventListener("pointerup", release); canvas.addEventListener("pointercancel", release);
    }
    var rt = 0;
    window.addEventListener("resize", function () {
      clearTimeout(rt);
      rt = setTimeout(function () { if (started && Math.abs(el.clientWidth - lastW) > 40) build(true); }, 200);
    });
    Site.onTheme(function () { if (state) draw(); });
  };

  var themeCbs = [];
  Site.onTheme = function (fn) { themeCbs.push(fn); };

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-theme-toggle]");
    if (!t) return;
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next); store("demo-theme", next); paintThemeButtons();
    themeCbs.forEach(function (fn) { fn(next); });
  });

  document.addEventListener("DOMContentLoaded", function () { paintThemeButtons(); setupMenu(); });
})();
