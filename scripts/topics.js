const topics = [
    "Adresacja", 
    "Wi-Fi", 
    "Szyfrowanie",
    "Zapora ogniowa",
    "VPN",
    "Routery",
    "Ataki",
    "Algorytmy",
    "Luki bezpieczeństwa",
    "HTTP",
    "OWASP",
    "Testowanie",
    "Linux",
    "Kryptografia",
    "Socjotechnika",
    "SSL",
    "Certyfikaty",
    "Bezpieczeństwo",
]
const balls = [];

const section = document.getElementById('topics')

console.log(section)

topics.forEach(topic => {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.left = `${Math.floor(Math.random() * 70) + 10}%`;
    ball.style.top = `${Math.floor(Math.random() * 60) + 10}%`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.innerHTML=topic
    balls.push(ball);
    section.append(ball);
})

balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -100 : 100),
    y: Math.random() * 100
  };

  el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}px, ${to.y}px)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
