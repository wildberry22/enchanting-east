import {activateOverlay, closeOverlay} from "./overlay"

export default function videoPopup(src, openBtn) {
  const screenWidth = window.screen.width
  const openVideoBtn = document.querySelector(openBtn)

  if(screenWidth >= 568) { 
    const wrap = document.createElement('div')
    wrap.innerHTML = `
    <iframe class="liner-video__popup" src="${src}" title="COSTA FIRENZE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `

    openVideoBtn.addEventListener('click', () => {
      activateOverlay(wrap)
    })
   
    closeOverlay(wrap)
  } else {
    const link = document.createElement('a')
    link.setAttribute('href', 'https://www.youtube.com/watch?v=85a0e62bP2E')
    link.setAttribute('target', '_blank')
    link.style.display = 'none'

    document.body.appendChild(link)

    openVideoBtn.addEventListener('click', () => {
      link.click()
    })
    document.body.removeChild(link)
  }

  
}