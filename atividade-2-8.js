var user = require("readline-sync")

texto = user.question("Insira tua frase de efeito ai: ")

primeira_letra = texto.charAt(0)

if (primeira_letra == primeira_letra.toLowerCase()) {
    console.log("Letra minúscula.")
}
else if (primeira_letra == primeira_letra.toUpperCase()) {
    console.log("Letra maiúscula.")
}