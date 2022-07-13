import './style.css'

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var darkmod = $$('button');

darkmod.forEach(element => {
    element.onclick = function () {
        $('button.hidden').classList.remove('hidden')
        this.classList.add('hidden')
    }
});