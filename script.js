//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 22
if (idade >= 18){
    console.log("Parabéns, você tem mais de 18 anos")
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a variável "humano" seja true
let humano = true
if (idade >=18 && humano == true){
    console.log("Parabéns! Você tem mais de 18 anos") ||
    console.log("Estamos redirecionando você para a página")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mes = "Setembro"

if (mes === "Dezembro" || mes === "Janeiro"){
    console.log("Parabéns, esse mês é todo seu!!")
} else{
    console.log(`Você faz aniversário em ${mes}`)
}
