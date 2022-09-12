var toggleBtn = document.querySelector('.sidebarMini__button');
var sidebarMinii = document.querySelector('.sidebarMini');
var checkBoxBtn = document.getElementById('checkbox');

toggleBtn.addEventListener('click', () => {
    sidebarMinii.classList.toggle('isOpen');
})

checkBoxBtn.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('darkMode');
})