var user=require("readline-sync")
var pergunta1=user.question("Informe o numero A:")
var pergunta2=user.question("Informe o numero B:")
if (pergunta1 % pergunta2==0){
    console.log("Esse numero é divisivel e seu resultado divido é:"+pergunta1/pergunta2)
}else
    console.log("Mano esse numero não é divisel, me ajuda a te ajudar.")

