export default function modalForm() {
  const form = document.querySelectorAll('.modal-form')
  const inputs = document.querySelectorAll('.modal-form input')

  const message = {
      loading: 'Загрузка...',
      success: 'Спасибо! Скоро мы с вами свяжемся',
      failure: 'Что-то пошло не так...'
  }

  const postData = async (url, data) => {
      document.querySelector('.status').textContent = message.loading
      let res = await fetch(url, {
          method: 'POST',
          body: data
      });

      return await res.text()
  };

  const clearInputs = () => {
      inputs.forEach(item => {
          item.value = ''
      })
  }

  form.forEach(item => { 
    item.addEventListener('submit', e => {
      e.preventDefault()

      let statusMessage = document.createElement('div')
      statusMessage.classList.add('status')
      item.appendChild(statusMessage)

      const formData = new FormData(item)

      postData('./server.php', formData)
                  .then(res => {
                      console.log(res)
                      statusMessage.textContent = message.success
                  })
                  .catch(() => {
                      statusMessage.textContent = message.failure
                  })
                  .finally(() => {
                      clearInputs()
                      setTimeout(() => {
                        document.querySelector('.overlay').classList.remove('active')
                        document.body.style.overflowY = 'visible'
                        document.body.style.marginRight = '0px'
                        document.querySelector('.modal').style.display = 'none'
                        statusMessage.remove()
                      }, 3000)
                  })
    })
  })
    
        
}