var user = require("readline-sync")
var numeroum = user.questionInt("Insira aqui o numero um: ");
var numerodois = user.questionInt("Insira aqui o numero dois: ");
var soma = 0
while (numeroum > 0) {
    soma = soma + numerodois
    numeroum = numeroum - 1
}
console.log(soma)