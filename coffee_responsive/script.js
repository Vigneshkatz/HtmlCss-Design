var menu = document.getElementById('nav-icon');
var navBar = document.getElementById('nav');

menu.onclick =() =>{
    navBar.classList.toggle('active');
    window.scroll

}
window.onscroll=() => {
    navBar.classList.remove('active');
}