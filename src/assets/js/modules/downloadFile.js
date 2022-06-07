export default function downloadFile (btnSelector, fileUrl, inputCheckSelector = '') {
  const form = document.querySelector('.route-download__form')
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
    form.addEventListener('submit', e => {
      e.preventDefault()

      const formData = new FormData(form)

       postData('./server.php', formData)
                .then(res => {
                  console.log(res)
                })
                .finally(() => {
                  input.value = ''
                })
    })
    
    setTimeout(() => {
      btn.setAttribute("disabled", "disabled")
    })
  })


  const postData = async (url, data) => {
    let res = await fetch(url, {
        method: 'POST',
        body: data
    })
    return await res.text()
  }

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