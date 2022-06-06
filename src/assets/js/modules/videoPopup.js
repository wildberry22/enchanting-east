import calcScroll from "./calcScroll.js"

export default function videoPopup(src, openBtn) {
  const overlay = document.querySelector('.overlay')
  const openVideoBtn = document.querySelector(openBtn)
  const scroll = calcScroll()

  const wrap = document.createElement('div')
  wrap.innerHTML = `
  <iframe class="liner-video__popup" width="1000" height="600" src="${src}" title="COSTA FIRENZE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `

  openVideoBtn.addEventListener('click', () => {
    activateOverlay()
  })

  closeOverlay()

  function activateOverlay() {
    overlay.classList.add('active')
    document.body.style.overflowY = 'hidden'
    document.body.style.marginRight = scroll + 'px'
    overlay.appendChild(wrap)
  }

  function closeOverlay() {
    document.addEventListener('keydown', e => {
      if(e.keyCode === 27) {
        removeOverlay()
      } 
    })

    overlay.addEventListener('click', e => {
      if (e.target == overlay) {
        removeOverlay()
      }
    })

    function removeOverlay() {
      overlay.classList.remove('active')
      document.body.style.overflowY = 'visible'
      document.body.style.marginRight = '0px'
      wrap.remove()
    }
  }

}