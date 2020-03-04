var user=require("readline-sync")
var pergunta=user.question("Insira sua palavra:")
var tamanhoPalavra=palavra.length

for (var i=0; i<tamanhoPalavra;i=i+1){
    console.log(pergunta.charAt(i));
}