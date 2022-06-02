export default function gallery(itemSelector) {
  const overlay = document.querySelector('.overlay')
  const items = document.querySelectorAll(itemSelector)

  const imgEl = document.createElement('img')
  imgEl.classList.add('gallery-img')
  
  items.forEach(item => {
    item.addEventListener('click', () => {
      imgEl.src = item.getAttribute('src')
      imgEl.alt = item.getAttribute('alt')

      activateOverlay()
    })
  })



  function activateOverlay() {
    overlay.classList.add('active')
    document.body.style.overflowY = 'hidden'
    overlay.append(imgEl)

    overlay.addEventListener('click', e => {
      if (e.target != imgEl) {
        console.log(imgEl)
        console.log(e.target)
        overlay.classList.remove('active')
        document.body.style.overflowY = 'visible'
        imgEl.remove()
        overlay.innerHTML = ''
      }
    })
  }

}