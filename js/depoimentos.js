var gab = document.getElementById('gabriel');
var dani = document.getElementById('dani');
var carlos = document.getElementById('carlos');
var avatardani = document.getElementById('ava-dani');
var avatarcarlos = document.getElementById('ava-carlos')
var avatargabr = document.getElementById('ava-gabr');

avatargabr.addEventListener('click', function(){

    gab.classList.toggle('show');
    dani.classList.remove('show');
    carlos.classList.remove('show');
})
    
avatardani.addEventListener('click', function(){

    dani.classList.toggle('show');
    gab.classList.remove('show');
    carlos.classList.remove('show');
})

avatarcarlos.addEventListener('click',function(){

    carlos.classList.toggle('show');
    gab.classList.remove('show');
    dani.classList.remove('show');
})