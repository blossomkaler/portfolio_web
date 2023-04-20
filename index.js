const intro = document.querySelector('.intro');
const myName = intro.querySelector('.my-name');
const prof = intro.querySelector('.profession');
const walk = 40; // 40px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = intro;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;    
    y = y + e.target.offsetTop;           
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  myName.style.textShadow = `${xWalk}px ${yWalk}px 1px #E8E2E2`;
  prof.style.textShadow = `${xWalk}px ${yWalk}px 1px #E8E2E2`;

}

intro.addEventListener('mousemove', shadow);

/*````````````````````````````````````````````````````````````````````````` */

function debounce(func, wait = 30, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  const aboutDiv = document.querySelector('.about');
  const abtText = document.querySelector('.abt-text');

  function slideText() {
      const slideInAt = (window.scrollY + window.innerHeight) - aboutDiv.clientHeight / 1.5;
      
      // bottom of the image
      const textBottom = aboutDiv.offsetTop + aboutDiv.clientHeight;
      const isHalfShown = slideInAt > aboutDiv.offsetTop;
      const isNotScrolledPast = window.scrollY < textBottom;
      if (isHalfShown && isNotScrolledPast) {
        abtText.classList.add('active');
      } else {
        abtText.classList.remove('active');
      }
  }

  window.addEventListener('scroll', debounce(slideText));