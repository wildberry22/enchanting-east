import {activateOverlay, closeOverlay} from "./overlay"

export default function gallery(itemSelector) {
  const items = document.querySelectorAll(itemSelector)

  const imgEl = document.createElement('img')
  imgEl.classList.add('gallery-img')

  items.forEach(item => {
    item.addEventListener('click', () => {
      imgEl.src = item.getAttribute('src').replace(/img-small/gi, 'img-big')
      imgEl.alt = item.getAttribute('alt')
      activateOverlay(imgEl)
    })
  })

  closeOverlay(imgEl)
}