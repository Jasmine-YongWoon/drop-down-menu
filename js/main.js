const basketStarterEl = document.querySelector('header .basket-starter')
const basketEl = basketStarterEl.querySelector('.basket')

basketStarterEl.addEventListener('click', function (event) {
  event.stopPropagation()
  if (basketEl.classList.contains('show')) {
    basketEl.classList.remove('show') //hide
  } else {
    basketEl.classList.add('show') //show
  }
})

window.addEventListener('click', function () {
  basketEl.classList.remove('show')
})

// dropdown menu click시 유지하도록 함
basketEl.addEventListener('click', function (event) {
  event.stopPropagation()
})