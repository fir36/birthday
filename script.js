const correctPassword = "wetogetherforever";

// 1. Password Protection & Transition
function checkPassword() {
    const input = document.getElementById("password").value;
    const error = document.getElementById("error-msg");

    if (input === correctPassword) {
        const loginPage = document.getElementById("login-page");
        const mainPage = document.getElementById("main-page");
        const video = document.getElementById("video");
        const music = document.getElementById("bg-music");

        loginPage.style.opacity = "0";
        setTimeout(() => {
            loginPage.classList.add("hidden");
            mainPage.classList.remove("hidden");
            startTypewriter();
            video.play();
            music.play().catch(e => console.log("Audio autoplay blocked by browser"));
        }, 1000);
    } else {
        error.innerText = "Wrong password, try again my love ❤️";
    }
}

// 2. Typewriter Effect
const message = "Happy Birthday my love… thank you for being my universe 💫";
let i = 0;

function startTypewriter() {
    const el = document.getElementById("typewriter");
    if (i < message.length) {
        el.innerHTML += message.charAt(i);
        i++;
        setTimeout(startTypewriter, 70);
    }
}

// 3. Image Modal Logic
function openModal(src) {
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("modal-img").src = src;
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

// 4. Video Sound Toggle
function toggleSound() {
    const video = document.getElementById("video");
    video.muted = !video.muted;
}

// 5. Starfield Animation Engine
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
const numStars = 200;

class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speed = Math.random() * 0.5;
    }
    draw() {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
    update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.y = 0;
    }
}

function initStars() {
    for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(star => {
        star.draw();
        star.update();
    });
    requestAnimationFrame(animate);
}

initStars();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
