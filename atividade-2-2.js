var user=require("readline-sync")
console.log("Bem vindo ao Programinha da temperatura")
var pergunta1=user.question("Deseja converter Celsius para Fahrenheit (digite 1) caso contrário (digite 2):")
var pergunta2=user.question("Agora informe os graus (nao e grau de moto usuario, mantem a linha de temperatura, vrumm vrumm):")
var celson=(pergunta2*9/5)+32
var fagundes=(pergunta2-32)*5/9

if (pergunta1==1){
    console.log("O valor de °C para °F é:"+celson)
}else if (pergunta1==2){
    console.log("O valor de °F para °C é:"+fagundes)
}else{
    console.log("Senhor lembrando que os dados para informar não tem correlação ao grau de moto")
}