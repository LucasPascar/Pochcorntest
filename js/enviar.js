const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:lucaspascar@hotmail.com?subject=nombre ${form.get('nombre')}  correo ${form.get('correo')}&body=${form.get('mensaje')}`)
  $buttonMailto.click()
}