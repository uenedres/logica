var user=require("readline-sync")
var nota1=user.question("Insira sua nota 1:")
var nota2=user.question("Insira sua nota 2:")
var nota3=user.question("Insira sua nota 3:")
var media=((nota1+nota2+nota3)/3)

if (media>=7){
    console.log("ALUNO APROVADO")
}
    
