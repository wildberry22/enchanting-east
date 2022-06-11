export default function mobileNav() {
  const navWrap = document.querySelector('.header-nav__wrapper')
  const navItem = navWrap.querySelectorAll('.header-nav__list-link')
  const socialWrap = document.querySelector('.header-social')
  const openBtn = document.querySelector('.menu-btn')
  const closeBtn = document.querySelector('.close-menu__btn')

  openBtn.addEventListener('click', e => {
    e.preventDefault()
    navWrap.classList.add('active')
    socialWrap.classList.add('active')
  })

  closeBtn.addEventListener('click', e => {
    e.preventDefault()
    navWrap.classList.remove('active')
    socialWrap.classList.remove('active')
  })

  navItem.forEach(item => {
    item.addEventListener('click', () => {
      navWrap.classList.remove('active')
      socialWrap.classList.remove('active')
    })
  })


}