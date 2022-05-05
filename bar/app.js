let list = document.querySelectorAll('.list')

function activeL() {
    list.forEach((elem) =>
    elem.classList.remove('active'))
    this.classList.add('active')
}

list.forEach((item) => item.addEventListener('click', activeL))