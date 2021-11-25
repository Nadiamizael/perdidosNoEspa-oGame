
function escolhaFase1Chris(){
    var escolha = prompt("E agora comandante? Escolha entre 1 e 2 a  sua opção desejada.");
    if (escolha == 1 ) {
        location = "../Chris/fase2Chris.html"
        
    }else if  (escolha == 2 ){
        location = "../Chris/gameoverChris1.html"
    }else {
        alert ("Escolha inválida")
    }
}



function escolhaFase2Chris(){
    var escolha = prompt("O que fazer? Escolha entre 1 e 2 a  sua opção desejada.");
    if (escolha == 2 ) {
        location = "../Chris/fase3Chris.html"
        
    }else if  (escolha == 1 ){
        location = "../Chris/gameoverChris2.html"
    }else {
        alert ("Escolha inválida")
    }
}



function escolhaFase3Chris(){
    var escolha = prompt(" Não desista agora! Escolha entre 1 e 2 a  sua opção desejada.");
    if (escolha == 2 ) {
        location = "../Chris/finalChris.html"
        
    }else if  (escolha == 1 ){
        location = "../Chris/gameoverChris3.html"
    }else {
        alert ("Escolha inválida")
    }
}
