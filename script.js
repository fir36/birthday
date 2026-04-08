const correctPassword = "wetogetherforever";

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error-msg");

  if (input === correctPassword) {
    document.getElementById("login-page").style.display = "none";
    document.getElementById("main-page").classList.remove("hidden");

    startTypewriter();
    document.getElementById("bg-music").play();
  } else {
    error.innerText = "Wrong password, try again my love ❤️";
  }
}

// Typewriter effect
const message = "Happy Birthday my love… thank you for being my universe 💫";
let i = 0;

function startTypewriter() {
  const el = document.getElementById("typewriter");
  function type() {
    if (i < message.length) {
      el.innerHTML += message.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}

// Modal
function openModal(src) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal-img").src = src;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// Video sound toggle
function toggleSound() {
  const video = document.getElementById("video");
  video.muted = !video.muted;
}
