let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () =>{
    menu.classList.toggle('fa-circle-xmark');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-circle-xmark');
    header.classList.remove('active');
}
