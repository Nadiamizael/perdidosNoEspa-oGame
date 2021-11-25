function escolhaFase1Paris(){
    var escolha = prompt("Qual sua reação Paris? Escolha entre 1 e 2 a  sua opção desejada.");
    if (escolha == 1 ) {
        location = "../paris/fase2Paris.html"
        
    }else if (escolha == 2){
        location = "../paris/gameoverParis1.html"
    }else {
        alert ("Escolha inválida");
    }
}


function escolhaFase2Paris(){
    var escolha = prompt("E agora Paris? Escolha entre 1 e 2 a  sua opção desejada.");
    if (escolha == 2 ) {
        location = "../paris/fase3Paris.html"
        
    }else if (escolha == 1){
        location = "../paris/gameoverParis2.html"
    }else {
        alert ("Escolha inválida");
    }
}


function escolhaFase3Paris(){
    var escolha = prompt("Não desista Paris! Escolha entre 1 e 2 a  sua opção desejada.");
    if (escolha == 1 ) {
        location = "../paris/finalParis.html"
        
    }else if (escolha == 2){
        location = "../paris/gameoverParis3.html"
    }else {
        alert ("Escolha inválida");
    }
}