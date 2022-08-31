const formulario = document.getElementById('formulario')
const verificacao = document.querySelectorAll('.questionario')
const verificacao1 = document.querySelectorAll('.respostas')
const enviar = document.querySelector('.enviar')

let eventoVerificado = 0

enviar.addEventListener('click',function(formulario){
    formulario.preventDefault()
    checarinputs()
})
function checarinputs(){
    while(eventoVerificado <= 3){
    let valorEventoVerificado = verificacao1[eventoVerificado].value.trim()
    console.log(valorEventoVerificado)
    if(valorEventoVerificado === '' ){
        verificacao[eventoVerificado].classList.add('erro');
        verificacao[eventoVerificado].classList.remove('sucesso');
    }else{
        verificacao[eventoVerificado].classList.add('sucesso');
        verificacao[eventoVerificado].classList.remove('erro');
    }
    eventoVerificado++;
    }
    if(eventoVerificado === 4){
        eventoVerificado = 0
    }
}