var user=require("readline-sync")
var pergunta1=user.question("Digite 1 para Masculino ou 2 para Feminino:")
var altura=user.question("Informe sua altura:")
if (pergunta1==1){
    var pesoidealM=(72.7*altura)-58
    console.log("Seu peso ideal é:"+pesoidealM+"Kg")   
}
else {
    var pesoidealF=(62.1*altura)-44.7
    console.log("Seu peso ideal é:"+pesoidealF+"Kg")
}