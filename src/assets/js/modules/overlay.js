import calcScroll from "./calcScroll.js"

export function activateOverlay(elem = '') {
  const scroll = calcScroll()
  const overlay = document.querySelector('.overlay')
  overlay.classList.add('active')
  document.body.style.overflowY = 'hidden'
  document.body.style.marginRight = scroll  + 'px'
  if(elem != '') {
    overlay.appendChild(elem)
  }
  
}

export function closeOverlay(elem = '') {
  const overlay = document.querySelector('.overlay')
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
    document.querySelector('html').style.overflowY = 'visible'
    document.body.style.marginRight = '0px'
    document.querySelector('.modal').style.display = 'none'
    if(elem != '') {
      elem.remove()
    }
  }
}