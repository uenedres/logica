var user=require("readline-sync")
var pergunta0=user.question("informe seu nome:")
var pergunta1=user.question("informe seu sexo (F para feminino e M para masculino):")
var pergunta2=user.question("Informe seu estado civil (S para solteiro(a) e C para casado(a):")

if (pergunta1=='f' && pergunta2=='c'){
    var pergunta3=user.question("informe o tempo de casada em anos:")
    console.log("seu nome:"+pergunta0+"seu sexo:"+pergunta1+"seu estado civil"+pergunta2+"tempo de casada:"+pergunta3+"anos")
}else{
    console.log ("seu nome:"+pergunta0+"seu sexo:"+pergunta1+"seu estado civil:"+pergunta2)
}