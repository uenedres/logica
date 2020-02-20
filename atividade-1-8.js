var user=require("readline-sync")
var pergunta1=user.question("Insira o primeiro lado do triangulo:")
var pergunta2=user.question("Insira o segundo lado do triangulo:")
var pergunta3=user.question("Insira o terceiro lado do triangulo:")

if (pergunta1==pergunta2&&pergunta1==pergunta3){
    console.log("TRIANGULO EQUILATERO")
}else if (pergunta1!=pergunta2&&pergunta1!=pergunta3){
    console.log("TRIANGULO ESCALENO")
}else (pergunta1!=pergunta2 || pergunta1==pergunta3 || pergunta2==pergunta3 && pergunta1==pergunta2 || pergunta1!=pergunta3 || pergunta2!=pergunta3)
    console.log("TRIANGULO ISOCELES")

