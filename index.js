/*``````````````````````````DYNAMIC SHADOW```````````````````````````````*/
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

/*````````````````````````ABOUT TEXT ANIMATION```````````````````````````` */

function debounce(func, wait = 20, immediate = true) {
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
      
      // bottom of the text
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

  /*`````````````````````````DROPDOWN```````````````````````````````` */

 const smediaIcons = [...document.querySelectorAll('.smedia-icon')] ;
 const smediaSection = document.querySelectorAll('.social-media') ;

smediaIcons.forEach(icon =>{
  icon.addEventListener('mouseover',(e)=>{
    const target = e.target;
    target.nextElementSibling.style.display = 'flex'; 
  })
});

smediaIcons.forEach(icon =>{
  icon.addEventListener('mouseout',(e)=>{
    const target = e.target;
    target.nextElementSibling.style.display = 'none'; 
  })
});

/*``````````````````````PROJECT LIGHTBOX````````````````````````````` */

const projects = [...document.querySelectorAll('.project')];

projects.forEach(project =>{
  project.addEventListener('mouseover',(e)=>{
    const target = e.target.closest('.project');
    const targetLightbox = target.querySelector('.project-lightbox');

     targetLightbox.style.position = 'absolute';
  })
});

projects.forEach(project =>{
  project.addEventListener('mouseout',(e)=>{
    const target = e.target.closest('.project');
    const targetLightbox = target.querySelector('.project-lightbox');

     targetLightbox.style.position = 'static';
  })
});


