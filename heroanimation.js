const container = document.getElementById("burst");
const colors = ["#ff4d4d", "#4dff91", "#4db8ff", "#ffd84d", "#d44dff"];
const lineCount = 50;

for (let i = 0; i < lineCount; i++) {
  const line = document.createElement("div");
  line.classList.add("line");

  const angle = Math.random() * 360; // random direction
  const delay = Math.random() * 8;
  const duration = 10 + Math.random() * 6; // 10–16s
  const color = colors[Math.floor(Math.random() * colors.length)];
  const distance = `${200 + Math.random() * 400}px`;

  line.style.background = color;
  line.style.color = color;
  line.style.setProperty("--angle", `${angle}deg`);
  line.style.setProperty("--distance", distance);
  line.style.animationDelay = `${delay}s`;
  line.style.animationDuration = `${duration}s`;

  container.appendChild(line);
}
