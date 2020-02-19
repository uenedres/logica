var user=require ("readline-sync")
AnoValor=user.question ("Insira o ano de nascimento: ")
var idade=2020 - AnoValor
{
    if (idade<16) 

    console.log("Não está apto ao voto")

else if (idade>=16)
    console.log("Se encontra apto ao voto")


    else (idade>18)
        console.log("Obrigado a votar por lei")
}