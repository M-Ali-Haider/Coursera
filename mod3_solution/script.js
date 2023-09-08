const burgermenu = document.getElementById('burgerMenu');
const burgerline = document.querySelectorAll('.burger-menu-bar');
const dd=document.getElementById('dd');
var burgerOpen=false;

burgermenu.addEventListener('mouseenter', () => {  
    burgermenu.style.border='3px solid white';
    burgerline.forEach((bar) => {
        bar.style.backgroundColor = 'white';
    });
});
burgermenu.addEventListener('mouseleave',()=>{
    if(burgerOpen==true){
        burgermenu.style.border='3px solid white';
        burgerline.forEach((bar) => {
            bar.style.backgroundColor = 'white';
        });
    }
    else if(burgerOpen==false){
        burgermenu.style.border='3px solid black';
        burgerline.forEach((bar) => {
            bar.style.backgroundColor = 'black';
        });
    }
})
burgermenu.addEventListener('click',()=>{
    if(burgerOpen==true){
        burgermenu.style.border='3px solid black';
        burgerline.forEach((bar) => {
            bar.style.backgroundColor = 'black';
        });
        burgerOpen=false;
        dd.style.height='0px';
    }
    else if(burgerOpen==false){
        burgermenu.style.border='3px solid white';
        burgerline.forEach((bar) => {
            bar.style.backgroundColor = 'white';
        });
        burgerOpen=true;
        dd.style.height='165px';
    }
})










