export default function tabs(titleSelector, contentSelector) {

  const titles = document.querySelectorAll(titleSelector)
  const contents = document.querySelectorAll(contentSelector)
  const activeClass = 'active'

  removeActiveClass()
  addActiveClass(0)

  titles.forEach((title, idx) => {
    title.addEventListener('click', () => {
      removeActiveClass()
      addActiveClass(idx)
    })
  })

  function addActiveClass(idx) {
    titles[idx].classList.add(activeClass)
    contents[idx].classList.add(activeClass)
  }
  function removeActiveClass() {
    titles.forEach(title => title.classList.remove(activeClass))
    contents.forEach(content => content.classList.remove(activeClass))
  }

}