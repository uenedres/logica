var user=require("readline-sync")
var pergunta=user.question("Insira o valor em KW gasto esse mes ai meu ousado:")
var valorkw=((1039/7)/100)
var kwtotal=(valorkw*pergunta)
var desc=((kwtotal*1.10)-kwtotal)

if (pergunta>=0){
    console.log("O valor de kw em reais e R$:"+valorkw)
}