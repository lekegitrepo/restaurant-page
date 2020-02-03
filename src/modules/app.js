// import image from '../../images/image-1.png';
import {menu} from './components/menu.js';

const mImage = menu.getImage();
const content = document.createElement('div');

const navbar = document.createElement('div');
navbar.className = 'navbar navbar-expand-lg bg-dark fixed-top';

//brand
const brand = document.createElement('a');
brand.className = 'navbar-brand';
brand.textContent = 'Brand';
brand.setAttribute('id', 'brand');
navbar.appendChild(brand);

const nav_menu = document.createElement('ul');
nav_menu.className = 'navbar-nav ml-auto';

//menu tab
const li_menu = document.createElement('li');
li_menu.className = 'nav-item';
const li_menu_a = document.createElement('a');
li_menu_a.className = 'nav-link';
li_menu_a.setAttribute('href', '#');
li_menu_a.textContent = 'Menu';
li_menu.appendChild(li_menu_a);
nav_menu.appendChild(li_menu);

//special menu tab
const li_special= document.createElement('li');
li_special.className = 'nav-item';
const li_special_a = document.createElement('a');
li_special_a.className = 'nav-link';
li_special_a.setAttribute('href', '#');
li_special_a.textContent = 'Special menu';
li_special.appendChild(li_special_a);
nav_menu.appendChild(li_special);

//contact tab
const li_contact = document.createElement('li');
li_contact.className = 'nav-item';
const li_contact_a = document.createElement('a');
li_contact_a.className = 'nav-link';
li_contact_a.setAttribute('href', '#');
li_contact_a.textContent = 'Contact';
li_contact.appendChild(li_contact_a);
nav_menu.appendChild(li_contact);

//about tab
const li_about = document.createElement('li');
li_about.className = 'nav-item';
const li_about_a = document.createElement('a');
li_about_a.className = 'nav-link';
li_about_a.setAttribute('href', '#');
li_about_a.textContent = 'About';
li_about.appendChild(li_about_a);
nav_menu.appendChild(li_about);

navbar.appendChild(nav_menu);

content.appendChild(navbar)

export {content, mImage};
