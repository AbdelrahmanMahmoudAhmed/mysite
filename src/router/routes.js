import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Portfolio from "../pages/Portfolio.vue"
import Project from "../pages/Project.vue"
import Contact from "../pages/Contact.vue"
import Blog from "../pages/Blog.vue"
import Error404 from "../pages/Error404.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
  {
    path: '/portfolio/:id',
    name: 'Project',
    component: Project,
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/:catchAll(.*)*',
    component: Error404
  }
];

export default routes;
