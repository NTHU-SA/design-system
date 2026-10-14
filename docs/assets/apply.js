/* 填寫申訴：分步驟、即時驗證、自動存草稿（只存在這台裝置的瀏覽器）、檢查頁 */
(function () {
  "use strict";
  var $ = function (id) { return document.getElementById(id); };
  var STEPS = [
    { title: "你的聯絡方式", desc: "信箱與通知" },
    { title: "發生了什麼事", desc: "類別、主旨、經過" },
    { title: "希望怎麼處理", desc: "協助方式" },
    { title: "確認送出", desc: "檢查後送出" }
  ];
  var DRAFT_KEY = "demo-apply-draft";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ERR_ICON = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/></svg>';
  var CHECK_ICON = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>';
  var state = { step: 1, reached: 1, files: [], attempted: {} };
  var form, panels;

  function today() { var d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function len(s) { return Array.from((s || "").trim()).length; }
  function val(name) {
    var el = form.elements[name];
    if (!el) return "";
    if (el instanceof RadioNodeList) return el.value;
    if (el.type === "checkbox") return el.checked;
    return el.value.trim();
  }

  /* ── 錯誤訊息：外框改成危險色、下方說明哪裡錯、怎麼修 ── */
  function setError(id, msg) {
    var err = $(id + "-err"), target = $(id);
    if (!err) return;
    if (msg) { err.innerHTML = ERR_ICON + "<span></span>"; err.querySelector("span").textContent = msg; err.hidden = false; }
    else { err.hidden = true; err.textContent = ""; }
    if (target) target.setAttribute("aria-invalid", msg ? "true" : "false");
    if (id === "consent") $("consent-row").setAttribute("aria-invalid", msg ? "true" : "false");
  }
  var CHECKS = {
    email: function () {
      var v = val("email");
      if (!v) return "請填寫學校信箱，案件連結會寄到這裡";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return "信箱格式不完整，例如 name@gapp.nthu.edu.tw";
      if (!/\.edu\.tw$/i.test(v)) return "請使用學校信箱，結尾是 .edu.tw";
      return "";
    },
    cat: function () { return val("cat") ? "" : "請選一個最接近的類別，不確定可以選「其他」"; },
    subject: function () {
      var n = len(val("subject"));
      if (!n) return "請用一句話說明發生了什麼事";
      if (n > 40) return "主旨最多 40 個字，目前 " + n + " 個字";
      return "";
    },
    detail: function () {
      var n = len(val("detail"));
      if (!n) return "請描述發生經過";
      if (n < 20) return "再多寫一點，至少 20 個字，目前 " + n + " 個字";
      if (n > 1000) return "最多 1000 個字，目前 " + n + " 個字";
      return "";
    },
    date: function () { var v = val("date"); return v && v > today() ? "日期不能晚於今天" : ""; },
    files: function () {
      if (state.files.length > 5) return "最多 5 個檔案，請移除 " + (state.files.length - 5) + " 個";
      var big = state.files.filter(function (f) { return f.size > 10 * 1024 * 1024; })[0];
      return big ? "「" + big.name + "」超過 10 MB，請壓縮或改傳截圖" : "";
    },
    help: function () { return val("help") ? "" : "請選擇希望學生會怎麼協助"; },
    consent: function () { return val("consent") ? "" : "送出前請勾選同意"; }
  };
  var STEP_FIELDS = { 1: ["email"], 2: ["cat", "subject", "detail", "date", "files"], 3: ["help"], 4: ["consent"] };

  function validateStep(n) {
    var first = null;
    STEP_FIELDS[n].forEach(function (id) {
      var msg = CHECKS[id]();
      setError(id, msg);
      if (msg && !first) first = id;
    });
    return first;
  }
  function focusField(id) {
    var el = $(id);
    if (el && el.getAttribute("role") === "radiogroup") el = el.querySelector("input:checked") || el.querySelector("input");
    if (!el) return;
    el.focus({ preventScroll: true });
    var box = (el.closest(".field") || el).getBoundingClientRect();
    var top = window.scrollY + box.top - stickyOffset() - 16;
    window.scrollTo({ top: top, behavior: reduceMotion ? "auto" : "smooth" });
  }
  function stickyOffset() {
    var h = document.querySelector(".site-header").offsetHeight, p = $("progress");
    return h + (p && getComputedStyle(p).display !== "none" ? p.offsetHeight : 0);
  }

  /* ── 步驟切換 ── */
  function renderNav() {
    $("stepnav").innerHTML = STEPS.map(function (s, i) {
      var n = i + 1, cur = n === state.step, done = n < state.reached && !cur;
      return '<button type="button" data-goto="' + n + '"' + (cur ? ' aria-current="step"' : "") + (n > state.reached ? " disabled" : "") + (done ? ' class="done"' : "") + ">" +
        '<span class="no">' + (done ? CHECK_ICON : n) + '</span><span class="txt"><b>' + s.title + "</b><span>" + s.desc + "</span></span></button>";
    }).join("");
    $("progress-title").textContent = STEPS[state.step - 1].title;
    $("progress-count").textContent = state.step + " / " + STEPS.length;
    Array.prototype.forEach.call(document.querySelectorAll(".bars i"), function (b, i) { b.classList.toggle("on", i < state.step); });
  }
  function show(n, opts) {
    state.step = n; state.reached = Math.max(state.reached, n);
    panels.forEach(function (p) { p.hidden = Number(p.getAttribute("data-step")) !== n; });
    document.querySelectorAll("[data-back]").forEach(function (b) { b.hidden = n === 1; });
    $("next").textContent = n === STEPS.length ? "送出申訴" : "下一步";
    if (n === STEPS.length) renderReview();
    renderNav();
    $("announce").textContent = "第 " + n + " 步，共 " + STEPS.length + " 步：" + STEPS[n - 1].title;
    if (opts && opts.quiet) return;
    var top = window.scrollY + form.getBoundingClientRect().top - stickyOffset() - 24;
    if (window.scrollY > top) window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? "auto" : "smooth" });
    var h = panels[n - 1].querySelector("h2");
    h.focus({ preventScroll: true });
  }
  function next() {
    state.attempted[state.step] = true;
    var bad = validateStep(state.step);
    if (bad) { focusField(bad); return; }
    if (state.step < STEPS.length) show(state.step + 1);
    else submit();
  }

  /* ── 檢查頁 ── */
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function row(k, v) { return "<dt>" + k + "</dt><dd" + (v ? "" : ' class="empty"') + ">" + (v ? esc(v) : "未填") + "</dd>"; }
  function renderReview() {
    var sec = function (n, rows) {
      return '<section><div class="review-head"><h3 class="title-sm">' + STEPS[n - 1].title + '</h3><button type="button" class="btn btn-ghost btn-sm" data-goto="' + n + '">修改</button></div><dl>' + rows + "</dl></section>";
    };
    $("review").innerHTML =
      sec(1, row("學校信箱", val("email")) + row("稱呼", val("nickname")) + row("系級", val("grade")) + row("不公開身分", val("anon") ? "是" : "否") + row("寄信通知", val("notify") ? "有新回覆時通知" : "不通知")) +
      sec(2, row("類別", val("cat")) + row("主旨", val("subject")) + row("發生經過", val("detail")) + row("發生日期", val("date").replace(/-/g, "/")) +
        row("照片或檔案", state.files.length ? state.files.map(function (f) { return f.name; }).join("、") : "")) +
      sec(3, row("協助方式", val("help")) + row("希望的結果", val("hope")));
  }

  /* ── 送出 ── */
  function submit() {
    var d = new Date();
    form.hidden = true; $("progress").hidden = true; $("stepnav").hidden = true;
    $("done").hidden = false;
    $("done-time").textContent = "已送出 · " + (d.getMonth() + 1) + "/" + d.getDate() + " " + String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
    $("done-mail").textContent = "確認信已寄到 " + val("email") + "，信裡有案件編號與專屬查詢連結。";
    $("save-state").textContent = "";
    Site.store(DRAFT_KEY, "");
    window.scrollTo({ top: 0, behavior: "auto" });
    $("done-title").focus({ preventScroll: true });
  }

  /* ── 檔案 ── */
  function fmtSize(b) { return b > 1024 * 1024 ? (b / 1024 / 1024).toFixed(1) + " MB" : Math.max(1, Math.round(b / 1024)) + " KB"; }
  function renderFiles() {
    $("file-list").innerHTML = state.files.map(function (f, i) {
      return '<div class="file"><span class="file-name">' + esc(f.name) + '</span><span class="file-size">' + fmtSize(f.size) + "</span>" +
        '<button type="button" class="btn btn-ghost file-remove" data-remove="' + i + '" aria-label="移除 ' + esc(f.name) + '"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button></div>';
    }).join("");
    if (state.attempted[2] || !$("files-err").hidden) setError("files", CHECKS.files());
  }

  /* ── 字數、自動長高、草稿 ── */
  function counter(id, max) {
    var n = len($(id).value), c = $(id + "-count");
    c.textContent = n + " / " + max; c.classList.toggle("over", n > max);
  }
  function grow(t) { t.style.height = "auto"; t.style.height = Math.max(t.scrollHeight + 2, 96) + "px"; }
  var saveTimer = 0;
  function saveDraft() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      var data = {};
      ["email", "nickname", "grade", "anon", "notify", "cat", "subject", "detail", "date", "help", "hope"].forEach(function (k) { data[k] = val(k); });
      Site.store(DRAFT_KEY, JSON.stringify(data));
      var d = new Date();
      $("save-state").innerHTML = CHECK_ICON + "草稿已自動儲存 · " + String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
    }, 500);
  }
  function restoreDraft() {
    var raw = Site.store(DRAFT_KEY), data;
    if (!raw) return;
    try { data = JSON.parse(raw); } catch (e) { return; }
    Object.keys(data).forEach(function (k) {
      var el = form.elements[k];
      if (!el) return;
      if (el instanceof RadioNodeList) { Array.prototype.forEach.call(el, function (r) { r.checked = r.value === data[k]; }); }
      else if (el.type === "checkbox") el.checked = !!data[k];
      else el.value = data[k] || "";
    });
    $("save-state").innerHTML = CHECK_ICON + "已還原上次的草稿";
  }

  document.addEventListener("DOMContentLoaded", function () {
    form = $("form");
    panels = Array.prototype.slice.call(form.querySelectorAll(".panel"));
    $("date").max = today();
    restoreDraft();
    counter("subject", 40); counter("detail", 1000); counter("hope", 300);
    show(1, { quiet: true });

    form.addEventListener("submit", function (e) { e.preventDefault(); next(); });
    form.addEventListener("input", function (e) {
      var t = e.target;
      if (t.id === "subject") counter("subject", 40);
      if (t.id === "detail") { counter("detail", 1000); grow(t); }
      if (t.id === "hope") { counter("hope", 300); grow(t); }
      var id = t.name === "cat" || t.name === "help" ? t.name : t.id;
      // 已經顯示錯誤的欄位，邊輸入邊重新檢查；其他欄位等按下一步才檢查
      if (CHECKS[id] && $(id + "-err") && !$(id + "-err").hidden) setError(id, CHECKS[id]());
      if (t.type !== "file") saveDraft();
    });
    form.addEventListener("change", function (e) {
      var t = e.target;
      if (t.id === "files") { state.files = state.files.concat(Array.prototype.slice.call(t.files)); t.value = ""; renderFiles(); return; }
      var id = t.name === "cat" || t.name === "help" ? t.name : t.id;
      if (CHECKS[id] && $(id + "-err") && !$(id + "-err").hidden) setError(id, CHECKS[id]());
      // 離開欄位時檢查格式，但不在使用者還沒打完字時就跳錯
      saveDraft();
    });
    form.addEventListener("focusout", function (e) {
      var id = e.target.id;
      if ((id === "email" || id === "subject") && e.target.value.trim()) setError(id, CHECKS[id]());
    });
    // Enter：跳到下一個欄位；最後一個欄位就前往下一步
    form.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" || e.isComposing || e.target.tagName === "TEXTAREA" || e.target.tagName === "BUTTON") return;
      if (e.target.type === "checkbox" || e.target.type === "radio") return;
      e.preventDefault();
      var fields = Array.prototype.slice.call(panels[state.step - 1].querySelectorAll("input:not([type=hidden]):not([type=file]), select, textarea"));
      var i = fields.indexOf(e.target), nextEl = fields[i + 1];
      if (nextEl && nextEl.type !== "checkbox") nextEl.focus(); else next();
    });
    document.addEventListener("click", function (e) {
      var g = e.target.closest("[data-goto]");
      if (g && !g.disabled) { show(Number(g.getAttribute("data-goto"))); return; }
      if (e.target.closest("[data-back]")) { show(state.step - 1); return; }
      var r = e.target.closest("[data-remove]");
      if (r) { state.files.splice(Number(r.getAttribute("data-remove")), 1); renderFiles(); return; }
      if (e.target.closest("#copy-no")) Site.copy("A-0913", "已複製案件編號 A-0913");
    });
  });
})();
