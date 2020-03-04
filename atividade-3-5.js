var user = require("readline-sync")
var pergunta1 = user.question("Digite um numero para base:")
var pergunta2 = user.question("Digite um numero para potencia:")

var total = Math.pow(pergunta1,pergunta2)
console.log("A potencia de:"+pergunta1+"é:"+total)