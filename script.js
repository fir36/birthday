const correctPassword = "wetogetherforever";
let flamesOut = 0;

function checkPassword() {
    const input = document.getElementById("password").value;
    if (input === correctPassword) {
        showSection('step-cake');
        document.getElementById("bg-music").play();
    } else {
        document.getElementById("error-msg").innerText = "Try again my love ❤️";
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
    
    const video = document.getElementById('main-video');
    if (sectionId === 'step-video') video.play(); else video.pause();
}

// Handle all 5 flames
document.querySelectorAll('.flame').forEach(flame => {
    flame.addEventListener('click', function() {
        if (this.style.display !== 'none') {
            this.style.display = 'none';
            flamesOut++;
            if (flamesOut === 5) {
                document.getElementById('cake-instruction').innerText = "All wishes are yours! ✨";
                document.getElementById('cake-next').classList.remove('hidden');
            }
        }
    });
});

function toggleGlobalMusic() {
    const music = document.getElementById("bg-music");
    const btn = document.getElementById("music-btn");
    if (music.paused) { music.play(); btn.innerText = "🎵 Music: ON"; }
    else { music.pause(); btn.innerText = "🎵 Music: OFF"; }
}

function toggleVideoSound() {
    const video = document.getElementById('main-video');
    video.muted = !video.muted;
}

// Starfield
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');

let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars(); // Re-fill stars when window changes
}

function initStars() {
    stars = [];
    for (let i = 0; i < 400; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speed: Math.random() * 0.5 + 0.1
        });
    }
}

function animate() {
    // This clears the canvas with a solid black so stars don't trail
    // but the canvas itself is BEHIND the cake because of z-index: 0
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

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

// Start everything
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animate();
