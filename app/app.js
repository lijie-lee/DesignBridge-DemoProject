// Chatter — interactive welcome page demo
(function () {
  "use strict";

  const GRADIENTS = [
    "linear-gradient(135deg,#ff9a6c,#ff5f7e)",
    "linear-gradient(135deg,#3ee0b6,#12c39a)",
    "linear-gradient(135deg,#8aa0ff,#8a5cff)",
    "linear-gradient(135deg,#ffd36c,#ff9a3c)",
    "linear-gradient(135deg,#6ce0ff,#4f6bff)"
  ];

  const seed = [
    { who: "Maya Chen", time: "2m", txt: "Just joined and this place already feels like home. Anyone up for a book club?", likes: 24, replies: 6 },
    { who: "Diego Alvarez", time: "5m", txt: "Count me in — I'll spin up a sci-fi thread for this month's pick.", likes: 11, replies: 2 },
    { who: "Priya N.", time: "just now", txt: "Welcome aboard everyone. Say hi below!", likes: 8, replies: 1 }
  ];

  const feed = document.getElementById("feed");
  const form = document.getElementById("composer");
  const input = document.getElementById("commentInput");
  const onlineEl = document.getElementById("onlineCount");

  let gi = 0;
  const initials = (name) =>
    name.trim().split(/\s+/).map(w => w[0]).slice(0, 2).join("").toUpperCase();

  function render(c, prepend) {
    const g = GRADIENTS[gi++ % GRADIENTS.length];
    const el = document.createElement("div");
    el.className = "cmt";
    el.innerHTML =
      '<div class="av" style="background:' + g + '">' + initials(c.who) + '</div>' +
      '<div style="flex:1">' +
        '<div><span class="who"></span><span class="time"></span></div>' +
        '<div class="txt"></div>' +
        '<div class="react">' +
          '<button class="like">Like <span class="n"></span></button>' +
          '<button class="reply">Reply ' + (c.replies || 0) + '</button>' +
          '<button class="share">Share</button>' +
        '</div>' +
      '</div>';
    el.querySelector(".who").textContent = c.who;
    el.querySelector(".time").textContent = c.time;
    el.querySelector(".txt").textContent = c.txt;

    let likes = c.likes || 0, liked = false;
    const likeBtn = el.querySelector(".like");
    const nEl = el.querySelector(".n");
    nEl.textContent = likes;
    likeBtn.addEventListener("click", () => {
      liked = !liked;
      likes += liked ? 1 : -1;
      nEl.textContent = likes;
      likeBtn.classList.toggle("on", liked);
    });

    if (prepend && feed.firstChild) feed.insertBefore(el, feed.firstChild);
    else feed.appendChild(el);
  }

  seed.forEach(c => render(c, false));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    render({ who: "You", time: "now", txt: text, likes: 0, replies: 0 }, true);
    input.value = "";
    input.focus();
  });

  // Simulate a lively "online" counter
  setInterval(() => {
    const base = parseInt(onlineEl.textContent, 10) || 128;
    const next = Math.max(90, base + (Math.random() < 0.5 ? -1 : 1) * (1 + Math.floor(Math.random() * 3)));
    onlineEl.textContent = next;
  }, 2500);

  // Wire up the marketing CTAs to focus the composer
  ["createBtn", "joinBtn", "browseBtn"].forEach(id => {
    const b = document.getElementById(id);
    if (b) b.addEventListener("click", () => { input.focus(); input.scrollIntoView({ behavior: "smooth", block: "center" }); });
  });
})();
