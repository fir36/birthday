const correctPassword = "wetogetherforever";

// 1. Logic to start the journey
function checkPassword() {
    const input = document.getElementById("password").value;
    if (input === correctPassword) {
        showSection('step-cake');
        document.getElementById("bg-music").play();
    } else {
        document.getElementById("error-msg").innerText = "Try again my love ❤️";
    }
}

// 2. Section Switcher
function showSection(sectionId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
    
    // Play video if it's the video section
    const video = document.getElementById('main-video');
    if (sectionId === 'step-video') video.play(); else video.pause();
}

// 3. Candle Logic
document.getElementById('flame').addEventListener('click', function() {
    this.style.display = 'none'; // Extinguish flame
    document.getElementById('cake-instruction').innerText = "Wish granted! ✨";
    document.getElementById('cake-next').classList.remove('hidden');
});

// 4. Music Controls
function toggleGlobalMusic() {
    const music = document.getElementById("bg-music");
    const btn = document.getElementById("music-btn");
    if (music.paused) {
        music.play();
        btn.innerText = "🎵 Music: ON";
    } else {
        music.pause();
        btn.innerText = "🎵 Music: OFF";
    }
}

function toggleVideoSound() {
    const video = document.getElementById('main-video');
    video.muted = !video.muted;
}

// 5. Starfield Animation (Basic version)
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let stars = Array(200).fill().map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    s: Math.random() * 2
}));
function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(st => {
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.s, 0, Math.PI*2);
        ctx.fill();
        st.y += 0.5;
        if(st.y > canvas.height) st.y = 0;
    });
    requestAnimationFrame(animate);
}
animate();
