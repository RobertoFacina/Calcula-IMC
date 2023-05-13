function mostra(mensagem){
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

calculaImc(80,1.80);



// alert("Você está muito longe de casa!")

// let ano = 2000;

// document.write("<h1> AQUI É O BRASIL!!!!</h1>");
// document.write("<br>");
// document.write("Acabei de pular uma linha :D!!");
// document.write("<br>");
// document.write("Agora vou concatenar as paradinhas, eis aqui um número aleatório: " + 10);
// document.write("<br>");
// document.write("Agora vai uma sominha: 20 + 25 = " + 45);
// document.write("<br>");
// document.write("Ou apenas a soma no código: " + (20 + 25));
// document.write("<br>");
// document.write("O ano do meu nascimento é: " + ano + "<br>");

// var media = (11 + 22 + 33 + 41 + 59)/5;

// document.write("Alunos entraram na turma com as idades: " + 11 + "," + 22 + "," + 33 + "," + 41 + "," + 59 + "anos. <br>");
// document.write("A media das idades arredondada é: " + Math.round(media));

// //função Math.round() serve para arredondar um número.

// Calculando IMC



