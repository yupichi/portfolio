// Hero表示（DOMContentLoadedで読み込み後すぐに発火）
window.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = "1";
  }
});

// スクロールフェード（IntersectionObserver）
const fade = document.querySelectorAll(".fade");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2 // 要素が20%見えたらアニメーション発火（見心地が良くなります）
});

fade.forEach((el) => observer.observe(el));