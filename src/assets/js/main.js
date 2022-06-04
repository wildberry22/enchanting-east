import animateWithScroll from "./modules/animateWithScroll.js";
import tabs from "./modules/tabs.js";
import gallery from "./modules/gallery.js";
import mask from "./modules/mask.js";
import downloadFile from './modules/downloadFile.js'

// scroll animations for animate.css
new WOW().init()
// scroll animations for elements with ".js-scroll"
animateWithScroll()
// tabs
tabs('.route-info__title-item', '.route-info__content-item')
// route gallery 
gallery('.route-info__item-photo img')
// phone mask
mask('.route-download__input')
// download pdf file second section
downloadFile('.route-download__btn', 'download-files/1.pdf', '.route-download__input')
// price gallery 
gallery('.price-list__item-img img')

