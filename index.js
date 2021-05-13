const modalOpen = document.querySelector('.modal-open')
const modalClose = document.querySelectorAll('.modal-close')
const modal = document.querySelector('.modal')
const body = document.querySelector('body')
const menu = document.querySelector('#menu')
const components = document.querySelector('#components')
modalOpen?.addEventListener('click', toggleModal)

menu.addEventListener('click', toggleComponents)

modalClose.forEach( close => close.addEventListener('click', toggleModal))

function toggleModal(){
    body.classList.toggle('hide-scroll')
    return modal.classList.toggle('modal-hide')
}

function toggleComponents(){
    return components.classList.toggle('components-show')
}