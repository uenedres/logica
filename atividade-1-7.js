var user=require("readline-sync")
var lado=user.question("Insira o numero de lados de um poligono regular:")

if (lado==3){
    console.log("Triangulo")
}else if (lado==4){
    console.log("Quadrado")
}else if(lado==5){
    console.log("Pentagono")
}else{
    console.log("Numero de lados invalido")
}