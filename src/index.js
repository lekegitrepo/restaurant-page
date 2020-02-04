import 'bootstrap';
import './scss/app.scss';
import {content} from './modules/app.js';

const mainContent = document.getElementById('content');

mainContent.appendChild(content);

const nav_menu = document.getElementById('nav_menu');
 if (nav_menu) { console.log('nav_menu is loaded')}

//container for display each tab content.
const container = document.createElement('div');
container.className = 'container';

const row = document.createElement('div');
row.className = 'row';

const descrip = document.createElement('div');
descrip.className = 'col-4';
row.appendChild(descrip);

const conten_img = document.createElement('img');
conten_img.className = 'col-8';
row.appendChild(conten_img);

container.appendChild(row);

content.appendChild(container);

const linkTags = () => {
  const a = document.querySelectorAll('.navbar a');
  return a[0].setAttribute('style', 'border-bottom: 2px solid #c73232;');
}
console.log(linkTags.length);

nav_menu.addEventListener('click', (e) => {
  const elem = e.target
  console.log(elem.getAttribute('data_description'))
  descrip.textContent = elem.getAttribute('data_description')
  conten_img.src = elem.getAttribute('data_image')
  elem.setAttribute('style', 'border-bottom: 2px solid #c73232;');
  console.log(linkTags())
});

function load (){
  console.log('onload is working!')
  descrip.textContent = brand.getAttribute('data_description')
  conten_img.src = brand.getAttribute('data_image')
  //brand.style.borderBottom = '3px solid #fff';
  linkTags();
}

const brand = document.getElementById('brand');
if (brand) { console.log('brand is loaded')}
brand.onload = load();
brand.addEventListener('click', load);
