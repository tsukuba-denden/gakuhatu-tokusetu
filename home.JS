let slideIndex = 1;
showSlides(slideIndex);

// ボタン操作用
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// ドット操作用
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// スライド表示切替
function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots   = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1)             slideIndex = slides.length;

  // すべて非表示→対象のみ表示
  for (let slide of slides) {
    slide.style.display = "none";
  }
  for (let dot of dots) {
    dot.className = dot.className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display   = "block";
  dots[slideIndex - 1].className        += " active";
}

// 自動でスライド切り替えたい場合は以下を追加
// setInterval(() => plusSlides(1), 5000); // 5秒ごとに次のスライドへ
setInterval(() => {
  plusSlides(1);
}, 10000); // 10000ミリ秒 = 10秒

function scrollAnimationFunc() {
  const scrollElements = document.querySelectorAll('.scroll_up, .scroll_left, .scroll_right');

  for (let i = 0; i < scrollElements.length; i++) {
    const triggerMargin = 100;
    const elementTop = scrollElements[i].getBoundingClientRect().top;

    if (window.innerHeight > elementTop + triggerMargin) {
      scrollElements[i].classList.add('on');
    }
  }
}

// ページ読み込み時とスクロール時に実行
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);

