var user = require("readline-sync")
var Numero=user.question("Insira um numero para verificação de ímpar ou par: ")
if((Numero % 2) == 0){
    console.log("Numero é par")
 }else{
    console.log("Numero é impar")
 }