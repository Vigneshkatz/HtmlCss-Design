let searchForm=document.querySelector('.search-form');
let shopingCart=document.querySelector('.shoping-cart');
let accountLogin=document.querySelector('.account-tab');
let hamburgermenu=document.querySelector('.navbar');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shopingCart.classList.remove('active');
    accountLogin.classList.remove('active');
    hamburgermenu.classList.remove('active');
}
// shoping-cart
document.querySelector('#account-btn').onclick =() => {
    searchForm.classList.remove('active');
    accountLogin.classList.remove('active');
    hamburgermenu.classList.remove('active');
    shopingCart.classList.toggle('active');
}
// user-btn
document.querySelector('#user-btn').onclick = () => {
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    hamburgermenu.classList.remove('active');
    accountLogin.classList.toggle('active');
}
// menu-btn
document.querySelector('#menu-btn').onclick =() => {
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    accountLogin.classList.remove('active');
    hamburgermenu.classList.toggle('active');
}
// on-scrolling all get toggled
window.onscroll=() => {
    searchForm.classList.remove('active');
    shopingCart.classList.remove('active');
    accountLogin.classList.remove('active');
    hamburgermenu.classList.remove('active');
}