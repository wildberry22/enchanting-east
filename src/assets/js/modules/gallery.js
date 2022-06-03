export default function gallery(itemSelector) {
  const overlay = document.querySelector('.overlay')
  const items = document.querySelectorAll(itemSelector)

  const imgEl = document.createElement('img')
  imgEl.classList.add('gallery-img')

  const scroll = calcScroll()

  items.forEach(item => {
    item.addEventListener('click', () => {
      imgEl.src = item.getAttribute('src')
      imgEl.alt = item.getAttribute('alt')
      activateOverlay()
    })
  })

  closeOverlay()

  function activateOverlay() {
    overlay.classList.add('active')
    document.body.style.overflowY = 'hidden'
    document.body.style.marginRight = scroll + 'px'
    overlay.appendChild(imgEl)
  }

  function closeOverlay() {
    document.addEventListener('keydown', e => {
      if(e.keyCode === 27) {
        removeOverlay()
      } 
    })

    overlay.addEventListener('click', e => {
      if (e.target != imgEl) {
        removeOverlay()
      }
    })

    function removeOverlay() {
      overlay.classList.remove('active')
      document.body.style.overflowY = 'visible'
      document.body.style.marginRight = '0px'
      imgEl.remove()
    }
  }


  
  function calcScroll() {
    let div = document.createElement('div')

    div.style.width = '50px'
    div.style.height = '50px'
    div.style.overflowY = 'scroll'
    div.style.visibility = 'hidden'

    document.body.appendChild(div)
    let scrollWidth = div.offsetWidth - div.clientWidth
    div.remove()
    return scrollWidth
  }

}