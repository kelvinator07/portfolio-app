import FrontPage from "./views/FrontPage.js";
import Resume from "./views/Resume.js";
import Portfolio from "./views/Portfolio.js";
import Services from "./views/Services.js";
import About from "./views/About.js";
import Contact from "./views/Contact.js";

const routes = [
  {
    path: "/home",
    name: "FrontPage",
    icon: "nc-icon nc-bank",
    component: FrontPage
  },
  {
    path: "/about",
    name: "About",
    icon: "nc-icon nc-diamond",
    component: About
  },
  {
    path: "/resume",
    name: "Resume",
    icon: "nc-icon nc-pin-3",
    component: Resume
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    icon: "nc-icon nc-diamond",
    component: Portfolio
  },
  {
    path: "/services",
    name: "Services",
    icon: "nc-icon nc-diamond",
    component: Services
  },
  {
    path: "/contact",
    name: "Contact",
    icon: "nc-icon nc-pin-3",
    component: Contact
  }
];

export default routes;