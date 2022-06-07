import {activateOverlay} from "./overlay"
import modalForm from "./modalForm.js";
import mask from "./mask.js";


export default function modal(triggers) {
  const btns = document.querySelectorAll(triggers)

  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault()

      document.querySelector('.modal').style.display = 'flex'
      activateOverlay()

      mask('.modal__input-tel')
    })
  })
  modalForm()
  

}