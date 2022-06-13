import animateWithScroll from "./modules/animateWithScroll.js";
import tabs from "./modules/tabs.js";
import gallery from "./modules/gallery.js";
import mask from "./modules/mask.js";
import downloadFile from './modules/downloadFile.js'
import videoPopup from "./modules/videoPopup.js";
import modal from "./modules/modal.js";
import toTop from "./modules/toTop.js";
import adaptiveAnimate from "./modules/adaptiveAnimate.js";
import mobileNav from "./modules/mobileNav.js";

// scroll animations for animate.css
new WOW().init()
// scroll animations for elements with ".js-scroll"
animateWithScroll()
// tabs
tabs('.route-info__title-item', '.route-info__content-item')
// gallery 
gallery('.gallery-watch')
// phone mask
mask('.route-download__input')
// download pdf file second section
downloadFile('.route-download__btn', 'download-files/1.pdf', '.route-download__input')
// liner video popup
videoPopup('https://www.youtube.com/embed/85a0e62bP2E', '.liner-video__btn')
// modal window
modal('[data-open-modal]')
// to top arrow
toTop()

adaptiveAnimate()
mobileNav()

