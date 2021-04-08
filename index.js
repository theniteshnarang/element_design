const modalOpen = document.querySelector('.modal-open')
const modalClose = document.querySelectorAll('.modal-close')
const modal = document.querySelector('.modal')
const body = document.querySelector('body')

modalOpen.addEventListener('click', toggleModal)
modalClose.forEach( close => close.addEventListener('click', toggleModal))

function toggleModal(){
    body.classList.toggle('hide-scroll')
    return modal.classList.toggle('modal-hide')
}