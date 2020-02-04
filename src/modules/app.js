import { HomePage } from './components/homepage';
import { Menu } from './components/menu';
import { SpecialMenu } from './components/special_menu';
import { Contact } from './components/contact';
import { About } from './components/about';

const content = document.createElement('div');

const navbar = document.createElement('div');
navbar.className = 'navbar navbar-expand-lg bg-dark fixed-top';

function setAttributes(el, attrs) {
  Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
}

const brand = document.createElement('a');
brand.className = 'navbar-brand';
brand.textContent = HomePage.getName();
setAttributes(brand, {
  id: 'brand',
  data_image: HomePage.getImage(),
  data_description: HomePage.getDescription(),
});
navbar.appendChild(brand);

const navMenu = document.createElement('ul');
navMenu.className = 'navbar-nav ml-auto';
navMenu.setAttribute('id', 'nav_menu');

const liMenu = document.createElement('li');
liMenu.className = 'nav-item';
const liMenuLink = document.createElement('a');
setAttributes(liMenuLink, { data_image: Menu.getImage(), data_description: Menu.getDescription() });
liMenuLink.className = 'nav-link';
liMenuLink.textContent = Menu.getName();
liMenu.appendChild(liMenuLink);

navMenu.appendChild(liMenu);

const liSpecial = document.createElement('li');
liSpecial.className = 'nav-item';
const liSpecialLink = document.createElement('a');
liSpecialLink.className = 'nav-link';
liSpecialLink.textContent = SpecialMenu.getName();
liSpecial.appendChild(liSpecialLink);

setAttributes(liSpecialLink, { data_image: SpecialMenu.getImage(), data_description: SpecialMenu.getDescription() });

navMenu.appendChild(liSpecial);


const liContact = document.createElement('li');
liContact.className = 'nav-item';
const liContactLink = document.createElement('a');
liContactLink.className = 'nav-link';
liContactLink.textContent = Contact.getName();
liContact.appendChild(liContactLink);

setAttributes(liContactLink, { data_image: Contact.getImage(), data_description: Contact.getDescription() });

navMenu.appendChild(liContact);

const liAbout = document.createElement('li');
liAbout.className = 'nav-item';
const liAboutLink = document.createElement('a');
liAboutLink.className = 'nav-link';
liAboutLink.textContent = About.getName();
liAbout.appendChild(liAboutLink);

setAttributes(liAboutLink, {
  data_image: About.getImage(),
  data_description: About.getDescription(),
});

navMenu.appendChild(liAbout);

navbar.appendChild(navMenu);

content.appendChild(navbar);

export { content };
