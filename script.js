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
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
let stars = Array(200).fill().map(() => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, s: Math.random() * 2 }));
function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(st => {
        ctx.beginPath(); ctx.arc(st.x, st.y, st.s, 0, Math.PI*2); ctx.fill();
        st.y += 0.5; if(st.y > canvas.height) st.y = 0;
    });
    requestAnimationFrame(animate);
}
animate();
