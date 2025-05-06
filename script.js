let burgerIconElem = document.querySelector('.burger_icon')
let HeaderElem = document.querySelector('.header_list')
let closeIconElem = document.querySelector('.close_icon')


burgerIconElem.addEventListener('click', burgerClick)

function burgerClick () {
  HeaderElem.style.transform = 'translateX(0)'
  burgerIconElem.style.display = 'none'
  closeIconElem.style.display = 'block'
}