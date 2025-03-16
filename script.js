document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enter-button');
    const mainContent = document.querySelector('.main-content');
    const intro = document.querySelector('.intro');
    const cursorFollower = document.createElement('div');
    cursorFollower.classList.add('cursor-follower');
    document.body.appendChild(cursorFollower);

    enterButton.addEventListener('click', () => {
        enterButton.disabled = true;
        const glitchInterval = setInterval(() => {
            enterButton.textContent = Math.random().toString(36).substring(2, 15);
        }, 100);

        setTimeout(() => {
            clearInterval(glitchInterval);
            intro.style.display = 'none';
            mainContent.style.display = 'flex';
            createParticles();
        }, 2000);
    });

    document.addEventListener('mousemove', (e) => {
        cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    function createParticles() {
        const particlesContainer = document.querySelector('.particles');

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particlesContainer.appendChild(particle);
        }
    }
});
