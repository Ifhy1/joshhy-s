const words = [
  'okayy', 'kek', 'human', ':)', 'lmao', 'okkk', '<3', 'lil boi'
];
const emojis = ['☁️', '💭', '✨', '🌸', '💬', '⭐', '🌼', '🫧'];

function createCloud() {
  const word = words[Math.floor(Math.random() * words.length)];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  const cloud = document.createElement('div');
  cloud.className = 'cloud';
  cloud.textContent = `${emoji} ${word} ${emoji}`;

  // Position randomly horizontally, start from bottom (just below viewport)
  cloud.style.left = Math.random() * (window.innerWidth - 200) + 'px';
  cloud.style.top = window.innerHeight + 'px';

  document.body.appendChild(cloud);

  // Play pop sound
  const popSound = document.getElementById('popSound');
  if (popSound) {
    popSound.currentTime = 0;
    popSound.play();
  }

  // Remove after animation duration
  setTimeout(() => {
    cloud.remove();
  }, 6000);
}

// Keep creating clouds every 700ms endlessly
setInterval(createCloud, 700);

// Night mode toggle
const toggleBtn = document.getElementById('toggleMode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('night');
  toggleBtn.textContent = document.body.classList.contains('night') ? '☀️ Day Mode' : '🌙 Night Mode';
});
