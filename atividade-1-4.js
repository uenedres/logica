var user= require ("readline-sync")
var oferta=user.question ("Quantas macas pretende comprar?")


    if (oferta>=12) {
        
        console.log ("Valor da compra com desconto aplicado fica R$"+oferta*0.25+"Reais")

            
    }else{ (oferta<12)
       
        console.log("Valor da compra R$"+oferta*0.35+"Reais")
    }