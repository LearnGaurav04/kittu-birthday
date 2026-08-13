const musicBtn = document.getElementById("musicBtn");
const audio = document.getElementById("teAmo");

const startBtn = document.getElementById("startBtn");
const introScreen = document.getElementById("introScreen");


// =========================
// MUSIC SETUP
// =========================

audio.src = "assets/te-amo-instrumental.mp3";
audio.loop = true;
audio.preload = "auto";


// =========================
// START WEBSITE
// =========================

startBtn.addEventListener("click", async () => {

  /*
    The Start button is a direct user interaction,
    so we start the music here.
  */

  try {

    await audio.play();

    musicBtn.textContent = "❚❚ Pause Te Amo";

  } catch (err) {

    console.log("Music could not autoplay:", err);

    musicBtn.textContent = "♪ Play Te Amo";

  }


  // Fade out landing page
  introScreen.classList.add("hidden");


  // Start website at the top
  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

});


// =========================
// MUSIC BUTTON
// =========================

musicBtn.addEventListener("click", async () => {

  try {

    if (audio.paused) {

      await audio.play();

      musicBtn.textContent = "❚❚ Pause Te Amo";

    } else {

      audio.pause();

      musicBtn.textContent = "♪ Play Te Amo";

    }

  } catch (err) {

    console.log("Music error:", err);

    musicBtn.textContent = "♪ Tap to play Te Amo";

  }

});


audio.addEventListener("play", () => {

  musicBtn.textContent = "❚❚ Pause Te Amo";

});


audio.addEventListener("pause", () => {

  musicBtn.textContent = "♪ Play Te Amo";

});


// =========================
// SCROLL REVEAL
// =========================

const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },

  {
    threshold: 0.12
  }

);


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    observer.observe(element);

  });


// =========================
// FLOATING HEARTS
// =========================

function heart() {

  const h = document.createElement("span");

  h.className = "heart";

  h.textContent =
    Math.random() > 0.35 ? "♡" : "♥";

  h.style.left =
    Math.random() * 100 + "vw";

  h.style.fontSize =
    12 + Math.random() * 22 + "px";

  h.style.animationDuration =
    4 + Math.random() * 4 + "s";

  document
    .getElementById("hearts")
    .appendChild(h);

  setTimeout(() => {

    h.remove();

  }, 8000);

}


setInterval(heart, 1100);
