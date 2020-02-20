var user=require("readline-sync")
var pergunta1=user.question("Insira o primeiro valor de 3 angulos:")
var pergunta2=user.question("Insira o segundo valor de 3 angulos:")
var pergunta3=user.question("Insira o terceiro valor de 3 angulos:")

if (pergunta1==90 || pergunta2==90 || pergunta3==90){
    console.log("O triangulo e RETANGULO")
}
else if (pergunta1>90 || pergunta2>90 || pergunta3>90){
    console.log("O triangulo e OBTUSANGULO")
}
else if (pergunta1<90 || pergunta<90 || pergunta3<90){
    console.log("O triangulo e ACUTANGULO")
}
