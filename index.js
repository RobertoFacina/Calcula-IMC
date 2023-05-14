// Calculando IMC

function mostra(mensagem){
    document.write(mensagem);
}

let nome = prompt("Informe seu nome: ");
let altura = prompt(nome + ", informe sua altura: ");
let peso = prompt(nome + ", informe seu peso: ");

function calculaImc(){
    let imc = peso / (altura**2);
    mostra("O cálculo do seu IMC é: " + imc);
    mostra("<br>Arredondado fica em: " + Math.round(imc) + "<br>");

    if(imc < 18.5){
        mostra("Você está com o peso abaixo do normal <br>");
    }else if(imc <= 24.9){
        mostra("Você está com o peso normal <br>");
    }else if(imc <= 29.9){
        mostra("Você está com excesso de peso, tome cuidado <br>");
    }else if(imc >= 30) {
        mostra("Você está obeso!! <br>");
    }
}

calculaImc();
mostra("Indicador do IMC respondido com base no número não arredondado.");

/*function mostra(mensagem){
    document.write(mensagem);
}
function calculaImc(peso , altura){
    let imc = peso / (altura**2);
    mostra("Este é o meu IMC baseado no banco: <br>" + imc);
    mostra("<br>Arredondado fica: <br>" + Math.round(imc) + "<br>");

    if(imc < 18.5){
        mostra("Você está com o peso abaixo do normal");
    }else if(imc <= 24.9){
        mostra("Você está com o peso normal");
    }else if(imc <= 29.9){
        mostra("Você está com excesso de peso, tome cuidado");
    }else if(imc >= 30) {
        mostra("Você está obeso!!");
    }
}

calculaImc(80,1.80);*/
