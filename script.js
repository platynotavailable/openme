document.addEventListener("DOMContentLoaded", () => {

  // SAFE love counter (only runs if element exists)
  const counterEl = document.getElementById("loveCounter");
  if (counterEl) {
    const loveStart = new Date("2025-09-21T00:00:00");

    setInterval(() => {
      const now = new Date();
      const diff = now - loveStart;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);

      counterEl.innerText =
        `I’ve loved you for: ${days} days ${hours} hrs ${mins} mins ❤️`;
    }, 1000);
  }

  // LOADER
  let progress = 0;
  const progressBar = document.getElementById("progress");
  const loadingPage = document.getElementById("loadingPage");
  const container = document.getElementById("container");

  if (progressBar && loadingPage && container) {
    let loader = setInterval(() => {
      progress++;
      progressBar.style.width = progress + "%";

      if (progress >= 100) {
        clearInterval(loader);
        loadingPage.classList.add("hidden");
        container.classList.remove("hidden");
      }
    }, 30);
  }

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

  // NO button runs
  document.addEventListener("mousemove", (e) => {
    if (!noBtn) return;
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
  if (yesBtn) {
    yesBtn.addEventListener("mouseover", () => {
      if (yesMoves < 5) {
        yesBtn.style.position = "absolute";
        yesBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
        yesBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
        yesMoves++;
      }
    });

    yesBtn.addEventListener("click", () => {
      confettiBoom();
      container.classList.add("hidden");
      letter.classList.remove("hidden");

      if (music) {
        music.play().catch(() => {
          alert("Tap screen once to allow music 🎵");
        });
      }
    });
  }

  if (next1) {
    next1.addEventListener("click", () => {
      letter.classList.add("hidden");
      heartsPage.classList.remove("hidden");
    });
  }

  if (next2) {
    next2.addEventListener("click", () => {
      heartsPage.classList.add("hidden");
      secretPage.classList.remove("hidden");
    });
  }

  if (reveal) {
    reveal.addEventListener("click", () => {
      reveal.disabled = true;
      reveal.innerText = "Loading…";

      secret.classList.add("hidden");
      secret.innerText = "❌ ERROR 404: Love not found...";

      setTimeout(() => {
        secret.classList.remove("hidden");
      }, 1500);

      setTimeout(() => {
        const message = `You’re the best thing that happened to me ❤️ 
and I just wanted you to know that 💞 
I want you in my life forever 💍  
as my girlfriend, my wife, my mommie 
and most importantly, my best friend 💖`;

        secret.innerText = "";
        let i = 0;
        document.body.classList.add("rainbow");

        function typeEffect() {
          if (i < message.length) {
            secret.innerText += message.charAt(i);
            i++;
            setTimeout(typeEffect, 50);
          }
        }
        typeEffect();
      }, 3500);
    });
  }

});

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
