import {activateOverlay, closeOverlay} from "./overlay"

export default function videoPopup(src, openBtn) {
  const openVideoBtn = document.querySelector(openBtn)

  const wrap = document.createElement('div')
  wrap.innerHTML = `
  <iframe class="liner-video__popup" width="1000" height="600" src="${src}" title="COSTA FIRENZE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `

  openVideoBtn.addEventListener('click', () => {
    activateOverlay(wrap)
  })
 
  closeOverlay(wrap)


}