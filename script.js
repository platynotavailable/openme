document.addEventListener("DOMContentLoaded", () => {

  // LOVE COUNTER
  const loveStart = new Date("2025-09-21T00:00:00");

  setInterval(() => {
    const now = new Date();
    const diff = now - loveStart;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("loveCounter").innerText =
      `I’ve loved you for: ${days} days ${hours} hrs ${mins} mins ❤️`;
  }, 1000);

  // LOADER
  let progress = 0;
  const progressBar = document.getElementById("progress");
  const loadingPage = document.getElementById("loadingPage");
  const container = document.getElementById("container");

  let loader = setInterval(() => {
    progress++;
    progressBar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(loader);
      loadingPage.classList.add("hidden");
      container.classList.remove("hidden");
    }
  }, 30);

  // ELEMENTS
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
  const letter = document.getElementById("letter");
  const next1 = document.getElementById("next1");
  const heartsPage = document.getElementById("heartsPage");
  const next2 = document.getElementById("next2");
  const secretPage = document.getElementById("secretPage");
  const reveal = document.getElementById("reveal");
  const secret = document.getElementById("secret");
  const music = document.getElementById("bgMusic");

  let yesMoves = 0;

  // NO button runs away
  document.addEventListener("mousemove", (e) => {
    const rect = noBtn.getBoundingClientRect();
    const distance = Math.hypot(e.clientX - rect.left, e.clientY - rect.top);
    if (distance < 100) moveNo();
  });

  function moveNo() {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
  }

  // YES moves 5 times
  yesBtn.addEventListener("mouseover", () => {
    if (yesMoves < 5) {
      yesBtn.style.position = "absolute";
      yesBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
      yesBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
      yesMoves++;
    }
  });

  // YES click
  yesBtn.addEventListener("click", () => {
    confettiBoom();

    container.classList.add("hidden");
    letter.classList.remove("hidden");

    music.play().catch(() => {
      alert("Tap screen once to allow music 🎵");
    });
  });

  // NEXT pages
  next1.addEventListener("click", () => {
    letter.classList.add("hidden");
    heartsPage.classList.remove("hidden");
  });

  next2.addEventListener("click", () => {
    heartsPage.classList.add("hidden");
    secretPage.classList.remove("hidden");
  });

  // SECRET reveal
  reveal.addEventListener("click", () => {
    reveal.disabled = true;
    reveal.innerText = "Loading…";

    secret.classList.add("hidden");

    setTimeout(() => {
      secret.classList.remove("hidden");
      typeText(secret, "You’re the best thing that happened to me ❤️ I want you forever 💖", 50);
    }, 1500);
  });

  // CONFETTI
  function confettiBoom() {
    for (let i = 0; i < 150; i++) {
      let c = document.createElement("div");
      c.innerText = "🎉";
      c.style.position = "fixed";
      c.style.left = Math.random() * window.innerWidth + "px";
      c.style.top = "-20px";
      c.style.fontSize = Math.random() * 20 + 15 + "px";
      c.style.zIndex = 9999;
      document.body.appendChild(c);

      let fall = setInterval(() => {
        c.style.top = c.offsetTop + 4 + "px";
      }, 10);

      setTimeout(() => {
        clearInterval(fall);
        c.remove();
      }, 3000);
    }
  }

  // TYPE EFFECT
  function typeText(element, text, speed = 50) {
    element.innerText = "";
    let i = 0;
    let typer = setInterval(() => {
      element.innerText += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(typer);
    }, speed);
  }

});
