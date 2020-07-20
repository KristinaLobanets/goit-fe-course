import './styles.css';
import { navigation } from './components/navigation.js';

const elements = ['Home', 'About', 'Contacts', 'Products', 'Cart'];
const sidebar = ['TV', 'Toys', 'Weapon', 'Tools'];
const newSidebar = ['Weapon', 'Tools'];

const headerNavigation = document.querySelector('.headerNavigation');
const sidebarNavigation = document.querySelector('.sidebarNavigation');
const sidebarNavigation2 = document.querySelector('.sidebarNavigation2');

navigation(headerNavigation, elements);

const getPage = e => {
  const link = navigation.getActiveLink(e);
  console.log(link);
};

navigation.createLinks(headerNavigation, elements);
headerNavigation.addEventListener('click', getPage);

navigation.createLinks(sidebarNavigation, sidebar);
sidebarNavigation.addEventListener('click', getPage);

navigation.createLinks(sidebarNavigation2, newSidebar);
sidebarNavigation2.addEventListener('click', getPage);

const product = {};
