const correctPassword = "wetogetherforever";

// Password Check & Start
function checkPassword() {
    const input = document.getElementById("password").value;
    if (input === correctPassword) {
        showSection('main-page');
        document.getElementById("bg-music").play();
        startTypewriter();
    } else {
        document.getElementById("error-msg").innerText = "Wrong password, my love ❤️";
    }
}

// Section Switcher (The core journey logic)
function showSection(sectionId) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.add('hidden');
    });
    // Show the chosen one
    document.getElementById(sectionId).classList.remove('hidden');
    
    // Auto-play video if entering video section
    const video = document.getElementById('main-video');
    if(sectionId === 'video') video.play(); else video.pause();
}

// Typewriter
const message = "Happy Birthday to the girl who owns my universe... 💫";
let i = 0;
function startTypewriter() {
    const el = document.getElementById("typewriter");
    if (i < message.length) {
        el.innerHTML += message.charAt(i);
        i++;
        setTimeout(startTypewriter, 70);
    }
}

// Modal/Sound logic
function openModal(src) { document.getElementById("modal").classList.remove("hidden"); document.getElementById("modal-img").src = src; }
function closeModal() { document.getElementById("modal").classList.add("hidden"); }
function toggleSound() { 
    const v = document.getElementById('main-video'); 
    v.muted = !v.muted;
    document.querySelector('.sound-toggle').innerText = v.muted ? "Unmute 🔊" : "Mute 🔇";
}

// --- STARFIELD ENGINE ---
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let stars = [];
for (let i = 0; i < 200; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        speed: Math.random() * 0.5
    });
}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        s.y += s.speed;
        if (s.y > canvas.height) s.y = 0;
    });
    requestAnimationFrame(animate);
}
animate();
