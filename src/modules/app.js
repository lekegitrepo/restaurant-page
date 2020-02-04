import image from '../../images/image-1.png';
import {Menu} from './components/menu.js';
import {SpecialMenu} from './components/special_menu.js';
import {Contact} from './components/contact.js';
import {About} from './components/about.js';

const mImage = Menu.getImage();
const content = document.createElement('div');

const navbar = document.createElement('div');
navbar.className = 'navbar navbar-expand-lg bg-dark fixed-top';

function setAttributes(el, attrs) {
  Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
}

//brand
const brand = document.createElement('a');
brand.className = 'navbar-brand';
brand.textContent = "Noodle's Palace";
setAttributes(brand, { id: 'brand',  data_image: image.toString(),
              data_description: 'This is a good restaurant'});
navbar.appendChild(brand);

const nav_menu = document.createElement('ul');
nav_menu.className = 'navbar-nav ml-auto';
nav_menu.setAttribute('id', 'nav_menu');

//menu tab
const li_menu = document.createElement('li');
li_menu.className = 'nav-item';
const li_menu_a = document.createElement('a');
setAttributes(li_menu_a, {data_image: Menu.getImage(), data_description: 'This is a good menu'});
li_menu_a.className = 'nav-link';
li_menu_a.textContent = Menu.getName();
li_menu.appendChild(li_menu_a);

nav_menu.appendChild(li_menu);

//special menu tab
const li_special= document.createElement('li');
li_special.className = 'nav-item';
const li_special_a = document.createElement('a');
li_special_a.className = 'nav-link';
li_special_a.textContent = SpecialMenu.getName();
li_special.appendChild(li_special_a);

setAttributes(li_special_a, {data_image: SpecialMenu.getImage(), data_description: 'This is a good menu'});

nav_menu.appendChild(li_special);

//contact tab
const li_contact = document.createElement('li');
li_contact.className = 'nav-item';
const li_contact_a = document.createElement('a');
li_contact_a.className = 'nav-link';
li_contact_a.textContent = Contact.getName();
li_contact.appendChild(li_contact_a);

setAttributes(li_contact_a, {data_image: Contact.getImage(), data_description: 'This is our contact'});

nav_menu.appendChild(li_contact);

//about tab
const li_about = document.createElement('li');
li_about.className = 'nav-item';
const li_about_a = document.createElement('a');
li_about_a.className = 'nav-link';
li_about_a.textContent = About.getName();
li_about.appendChild(li_about_a);

setAttributes(li_about_a, {data_image: About.getImage(),
              data_description: 'This is about how we start cooking good food'});

nav_menu.appendChild(li_about);

navbar.appendChild(nav_menu);

content.appendChild(navbar)

export {content};
