var user=require("readline-sync")
console.log("Numero Pares")
var numero=user.question("Digite um numero:")
var cont=0

while(cont<numero){
    if(cont%2==0){
        console.log("Numero:"+cont)
    }
    cont++
}