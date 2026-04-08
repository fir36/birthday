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
const numStars = 400; // Increased for a richer galaxy

function initStars() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 1.5,
            speed: Math.random() * 0.3 + 0.1,
            opacity: Math.random(),
            twinkle: Math.random() * 0.02
        });
    }
}

function animate() {
    // We use a very slight trail effect for "moving" stars
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(s => {
        // Draw the star
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        // Move the star (falling slowly)
        s.y += s.speed;
        
        // Twinkle logic
        s.opacity += s.twinkle;
        if (s.opacity > 1 || s.opacity < 0.2) s.twinkle *= -1;

        // Reset star if it leaves the bottom
        if (s.y > canvas.height) {
            s.y = 0;
            s.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(animate);
}

// Initialize and Start
initStars();
animate();

// Adjust if window is resized
window.addEventListener('resize', initStars);
