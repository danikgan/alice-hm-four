/** =============== Initiating the document =============== */ 
const textWithin = `
  <h1 style='margin:0'>
    “ON BEGINNINGS” <br />
    From Madness, <br />
    Rack and Honey <br />
    by Mary Ruefle
  </h1>
`;

const headingAbove = document.createElement('a');
headingAbove.setAttribute('href', 'text.html');
headingAbove.innerHTML = textWithin;
document.querySelector('.inner-heading-above').appendChild(headingAbove);

const headingBelow = document.createElement('a');
headingBelow.classList.add("below-font-color");
headingBelow.setAttribute('href', 'rtext.html');
headingBelow.innerHTML = textWithin;
document.querySelector('.inner-heading-below').appendChild(headingBelow);

/** =============== Defining page behaviour =============== */ 
function addTextBelow() { 
  document.querySelector('.inner-heading-below').classList.add('activated'); 
  document.querySelector('.dot').setAttribute('style', 'display: block;')
}
function removeTextBelow() { 
  document.querySelector('.inner-heading-below').classList.remove('activated'); 
  document.querySelector('.dot').setAttribute('style', 'display: none;')
}

let elementAdded = false;
document.documentElement.addEventListener('mousemove', (e) => {
  document.documentElement.style.setProperty("--cursorX", e.clientX -100 + "px");
  document.documentElement.style.setProperty("--cursorY", e.clientY -100 + "px");
  const maxHeight = window.innerHeight / 2;
  if (e.clientY > maxHeight && !elementAdded) {
    addTextBelow();
    elementAdded = true;
  } else if (e.clientY < maxHeight && elementAdded) {
    removeTextBelow();
    elementAdded = false;
  }
});
