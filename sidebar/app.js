
let menu = document.querySelector('.toggle')
let nav = document.querySelector('.nav')

menu.onclick = function() {
    menu.classList.toggle('active')
    nav.classList.toggle('active')
}

let list = document.querySelectorAll('.list');

for(let elem = 0; elem < list.length; elem++) {
    list[elem].onclick = function() {
        let item = 0;
        while(item < list.length) {
            list[item++].className = 'list';
        }
        list[elem].className = 'list active';
    }
}