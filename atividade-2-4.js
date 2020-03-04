var user=require("readline-sync")
console.log("Bem-vindo ao Sambank")
var pergunta1=user.question("Informa o salario ai meu champs pra nois te informar um limite daorinha:")
var pergunta2=user.question("Insira o valor que pretende solicitar o devido emprestimo meu consagrado(a):")
var pergunta3=user.question("Informe o numero de parcelas que pretende:")
var total=pergunta2/pergunta3
console.log("Analisando...Aguarde...")

if (total<=(pergunta2/100)*30){
    console.log("Emprestimo aprovado"+pergunta3+"vezes de:"+total)
}else if (parcela<=0 || parcela==1){
    console.log("Emprestimo não pode ser pago avista amigo ora ora...")
}else{
    console.log("E parça deu bom não, tenta uma outra proposta ai pra gente avaliar certinho e ver se rola #paz")
}