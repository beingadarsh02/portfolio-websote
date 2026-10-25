const canvas = document.getElementsByClassName(`main-container`);
const ctx = canvas.getContext('2d');
let particles = [];

function updateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.speed;
        p.y += p.speedY;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(updateParticles); // Continuous loop
}
updateParticles();   