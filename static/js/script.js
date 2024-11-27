let menuBtn = document.querySelector('.menu-icon');
menuBtn.onclick = function() {
    let menuList = document.querySelector('#menuList');
    menuList.classList.toggle('active');
}