import animateWithScroll from "./modules/animateWithScroll.js";
import tabs from "./modules/tabs.js";
import gallery from "./modules/gallery.js";

// scroll animations for animate.css
new WOW().init()
// scroll animations for elements with ".js-scroll"
animateWithScroll()
// tabs
tabs('.route-info__title-item', '.route-info__content-item')
// route gallery 
gallery('.route-info__item-photo img')
