export default function downloadFile (btnSelector, fileUrl, inputCheckSelector = '') {
  const input = document.querySelector(inputCheckSelector)
  const btn = document.querySelector(btnSelector)

  if (input) {
    input.addEventListener('input', () => {
      if (input.value.length == 19) btn.removeAttribute('disabled')
      else  btn.setAttribute("disabled", "disabled")
    })
  }

  btn.addEventListener('click', () => {
    download()

    input.value = ''
    btn.setAttribute("disabled", "disabled")
  })


  function download() {
    const link = document.createElement('a')

    link.setAttribute('href', fileUrl)
    link.setAttribute('download','fileName')
    link.style.display = 'none'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


}