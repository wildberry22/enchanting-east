export default function toTop() {
  const btn = document.querySelector('.to-top')

  window.addEventListener('scroll', () => scrollFunction())

  function scrollFunction() {
    if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
      btn.classList.add('active')
    } else {
      btn.classList.remove('active')
    }
  }

}