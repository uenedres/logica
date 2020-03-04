var user=require('readline-sync');

var pergunta=user.questionInt("Insira um numero: ")

if(num >= 0){
    console.log("O seu numero é positivo:"+pergunta*2)
  }else{
    console.log("O seu numero é negativo:"+pergunta*3)
  }