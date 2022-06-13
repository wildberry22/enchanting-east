export default function adaptiveAnimate() {
  const screenWidth = window.screen.width

  if(screenWidth <= 900) {
    header()
  }

  if(screenWidth <= 568) {
    benefits()
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

  function benefits() {
    const benefits = document.querySelector('.benefits')

    benefits.querySelectorAll('.benefits-list__item').forEach(item => {
      item.classList.add('animate__fadeInLeft')
      item.classList.remove('animate__fadeInUp')
    })

    benefits.querySelector('.benefits-list__item.animate__delay-0-7s').classList.add('animate__delay-0-5s')
    benefits.querySelector('.benefits-list__item.animate__delay-0-7s').classList.remove('animate__delay-0-7s')

    benefits.querySelector('.benefits-list__item.animate__delay-1s').classList.add('animate__delay-0-5s')
    benefits.querySelector('.benefits-list__item.animate__delay-1s').classList.remove('animate__delay-1s')

    benefits.querySelector('.benefits-list__item.animate__delay-1-3s').classList.add('animate__delay-0-5s')
    benefits.querySelector('.benefits-list__item.animate__delay-1-3s').classList.remove('animate__delay-1-3s')

    benefits.querySelector('.benefits-list__item.animate__delay-1-6s').classList.add('animate__delay-0-5s')
    benefits.querySelector('.benefits-list__item.animate__delay-1-6s').classList.remove('animate__delay-1-6s')
  }


}