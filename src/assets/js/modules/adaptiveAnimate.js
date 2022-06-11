export default function adaptiveAnimate() {
  const screenWidth = window.screen.width

  if(screenWidth <= 900) {
    header()
  }
  
  function header() {
    const header = document.querySelector('.header')

    header.querySelectorAll('.animate__delay-2s').forEach(item => {
      item.classList.add('animate__delay-1-3s')
      item.classList.remove('animate__delay-2s')
    })

    header.querySelector('.animate__delay-2-4s').classList.add('animate__delay-1-6s')
    header.querySelector('.animate__delay-2-4s').classList.remove('animate__delay-2-4s')

    header.querySelector('.animate__delay-2-7s').classList.add('animate__delay-1-9s')
    header.querySelector('.animate__delay-2-7s').classList.remove('animate__delay-2-7s')

    header.querySelector('.animate__delay-3s').classList.add('animate__delay-2-2s')
    header.querySelector('.animate__delay-3s').classList.remove('animate__delay-3s')

  }

}