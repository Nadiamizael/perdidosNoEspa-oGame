function escolhaFase1Richard(){
    var escolha = prompt("E agora Richard? Escolha entre 1 e 2 a  sua opção desejada.");
    if (escolha == 1 ) {
        location = "../richard/fase2Richard.html"
        
    }else if (escolha == 2){
        location = "../richard/gameoverRichard1.html"
    }else {
        alert ("Escolha inválida");
    }
}


function escolhaFase2Richard(){
    var escolha = prompt("O que você faz? Escolha entre 1 e 2 a  sua opção desejada.");
    if (escolha == 2 ) {
        location = "../richard/fase3Richard.html"
        
    }else if (escolha == 1){
        location = "../richard/gameoverRichard2.html"
    }else {
        alert ("Escolha inválida");
    }
}

function escolhaFase3Richard(){
    var escolha = prompt("Você? Escolha entre 1 e 2 a  sua opção desejada.");
    if (escolha == 2 ) {
        location = "../richard/finalRichard.html"
        
    }else if (escolha == 1){
        location = "../richard/gameoverRichard3.html"
    }else {
        alert ("Escolha inválida");
    }
}