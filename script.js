const words = [
  'okayy', 'kek', 'human', ':)', 'lmao', 'okkk', '<3', 'lil boi', 'pleb'
];
const emojis = ['☁️', '💭', '✨', '🌸', '💬', '⭐', '🌼', '🫧'];

function createCloud() {
  const word = words[Math.floor(Math.random() * words.length)];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  const cloud = document.createElement('div');
  cloud.className = 'cloud';
  cloud.textContent = `${emoji} ${word} ${emoji}`;

  cloud.style.left = Math.random() * (window.innerWidth - 200) + 'px';
  cloud.style.top = window.innerHeight + 'px';

  document.body.appendChild(cloud);

  const popSound = document.getElementById('popSound');
  if (popSound) {
    popSound.currentTime = 0;
    popSound.play();
  }

  setTimeout(() => {
    cloud.remove();
  }, 6000);
}

setInterval(createCloud, 700);

const toggleBtn = document.getElementById('toggleMode');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('night');
  toggleBtn.textContent = document.body.classList.contains('night') ? '☀️ ' : '🌙 ';
});
