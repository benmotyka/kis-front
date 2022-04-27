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

topics.forEach(topic => {
    const ball = document.createElement("div");
    ball.classList.add("ball");
    ball.style.left = `${Math.floor(Math.random() * 80) + 5}%`;
    ball.style.top = `${Math.floor(Math.random() * 85) + 5}%`;
    ball.style.transform = `scale(${Math.random()})`;
    ball.innerHTML=topic
    balls.push(ball);
    section.append(ball);
})

balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -150 : 150),
    y: Math.random() * 150
  };

  el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}px, ${to.y}px)` }
    ],
    {
      duration: (Math.random() + 1) * 4000,
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
