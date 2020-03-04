var user=require("readline-sync")
console.log("Programa de numeros IMPARES")
var numero=user.question("Digite um numero:")
var cont=1
while(cont<=100){
    if(cont%2==1){
        console.log(cont)
    }
    cont++
}