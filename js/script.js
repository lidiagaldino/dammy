var op = document.getElementById('op');
var btnassis = document.getElementById('assistente');
var containerassis = document.getElementById('assistente-container');
var containeraux = document.getElementById('auxiliar-container');
<<<<<<< HEAD
=======
var containerana = document.getElementById('analista-container');
var containerjov = document.getElementById('jovem-container');
>>>>>>> 96ea6719a79d51aaa79b1f7c8119080399788442
var btnaux = document.getElementById('auxiliar');
var btnana = document.getElementById('analista');
var btnjov = document.getElementById('jovem');

btnassis.addEventListener('click', function(){

    op.classList.toggle('hide');
    containerassis.classList.toggle('show');

})

btnaux.addEventListener('click', function(){

    op.classList.toggle('hide');
    containeraux.classList.toggle('show');
})

<<<<<<< HEAD
=======
btnana.addEventListener('click', function(){

    op.classList.toggle('hide');
    containerana.classList.toggle('show');
})

btnjov.addEventListener('click', function(){

    op.classList.toggle('hide');
    containerjov.classList.toggle('show');
})

>>>>>>> 96ea6719a79d51aaa79b1f7c8119080399788442
containerassis.addEventListener('click',function(){
    op.classList.toggle('hide');
    containerassis.classList.toggle('show');
})

containeraux.addEventListener('click', function(){
    op.classList.toggle('hide');
    containeraux.classList.toggle('show');
<<<<<<< HEAD
})
=======
})

containerana.addEventListener('click', function(){
    op.classList.toggle('hide');
    containerana.classList.toggle('show');
})

containerjov.addEventListener('click', function(){
    op.classList.toggle('hide');
    containerjov.classList.toggle('show');
})

>>>>>>> 96ea6719a79d51aaa79b1f7c8119080399788442
