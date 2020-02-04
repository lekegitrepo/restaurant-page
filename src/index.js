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

const linkTags = (currElem) => {
  const a = document.querySelectorAll('.navbar a');
  const att = [...a].map(el => {if (el.hasAttribute('style')) {el.setAttribute('style', '')}})
  currElem.setAttribute('style', 'border-bottom: 2px solid #c73232; background-color: #343a40 !important; border-radius: 20% 0px 0px;');
}

nav_menu.addEventListener('click', (e) => {
  const elem = e.target
  console.log(elem.getAttribute('data_description'))
  descrip.textContent = elem.getAttribute('data_description')
  conten_img.src = elem.getAttribute('data_image')
  linkTags(elem)
});

function load (){
  console.log('onload is working!')
  descrip.textContent = brand.getAttribute('data_description')
  conten_img.src = brand.getAttribute('data_image')
  linkTags(brand);
}

const brand = document.getElementById('brand');
if (brand) { console.log('brand is loaded')}
brand.onload = load();
brand.addEventListener('click', load);
