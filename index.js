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