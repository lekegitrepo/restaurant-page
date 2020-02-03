import 'bootstrap';
import './scss/app.scss';
import {content} from './modules/app.js';

const mainContent = document.getElementById('content');

mainContent.appendChild(content);

const nav_menu = document.getElementById('nav_menu');
 if (nav_menu) { console.log('nav_menu is loaded')}

const container = document.createElement('div');
container.className = 'container mt-5';

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
nav_menu.addEventListener('click', (e) => {
  const elem = e.target
  console.log(elem.getAttribute('data_description'))
  descrip.textContent = elem.getAttribute('data_description')
  conten_img.src = elem.getAttribute('data_image')
});

const brand = document.getElementById('brand');
brand.style.color = 'white';
brand.addEventListener('load', () => {
  console.log('onload is working!')
  descrip.textContent = brand.getAttribute('data_description')
  conten_img.src = brand.getAttribute('data_image')
});
