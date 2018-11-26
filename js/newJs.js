document
  .querySelector('input[type="button"]')
  .addEventListener('click', () => {
      Promise
        .resolve(
            document.title = 
            document.querySelector('input[type="text"]').value
        )
        .then(            
            document.querySelector('input[type="text"]').value = ''
        )      
  })
