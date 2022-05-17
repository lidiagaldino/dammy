const menu = document.querySelector('.menu-burguer-container');
var home = document.getElementById('hom');
var carreiras = document.getElementById('carre');
var news = document.getElementById('news');
var sobre = document.getElementById('sobr');
var nossa = document.getElementById('nossa');
var dep = document.getElementById('dep');


menu.addEventListener('click', function(){
    menu.classList.toggle('show');
})
hom.addEventListener('click', function(){
    menu.classList.remove('show');
})

carre.addEventListener('click', function(){
    menu.classList.remove('show');
})

sobr.addEventListener('click', function(){
    menu.classList.remove('show');
})

nossa.addEventListener('click', function(){
    menu.classList.remove('show');
})

news.addEventListener('click', function(){
    menu.classList.remove('show');
})

dep.addEventListener('click', function(){
    menu.classList.remove('show');
})




