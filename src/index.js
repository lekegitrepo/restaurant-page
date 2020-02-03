import 'bootstrap';
import './scss/app.scss';
import {content, mImage} from './modules/app.js';

const mainContent = document.getElementById('content');

mainContent.appendChild(content);

const brand = document.getElementById('brand');
brand.style.color = 'white';

const container = document.createElement('div');
container.className = 'container mt-5';

const row = document.createElement('div');
row.className = 'row';

const descrip = document.createElement('div');
descrip.className = 'col-4';
descrip.textContent = 'This is Description';
row.appendChild(descrip);

const conten_img = document.createElement('img');
conten_img.className = 'col-8';
conten_img.src = mImage;
row.appendChild(conten_img);

container.appendChild(row);

content.appendChild(container);
