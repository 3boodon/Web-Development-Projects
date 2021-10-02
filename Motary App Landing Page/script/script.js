const container = document.querySelector('header .container');
const menu = document.querySelector('header .container .menu');



menu.addEventListener('click',()=>{
    container.classList.toggle('opened');
    
});


new kursor({
    type: 2,
    color: "#2c71fa",
    removeDefaultCursor: true
})