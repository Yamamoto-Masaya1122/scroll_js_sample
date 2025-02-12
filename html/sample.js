document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("sample");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        alert("アラートです");
        observer.disconnect(); // 一度実行したら監視を停止
      }
    });
  }, { threshold: 0.5 }); // 50%以上見えたら発火

  observer.observe(target);
});
