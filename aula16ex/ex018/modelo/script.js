let num = document.querySelector('input#fnum')
let lista =document.querySelector('select#flista')
let res = document.querySelector ('div#res')
let valores = []


function isNumero(n){
    if (Number(n) >=1 && Number(n) <=100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }

}

function adicionar () {
    if (isNumero(num.value) && !inLista (num.value, valores)) {
        valores.push(Number(num.value)) //comando "push" para o vetor "valores" adicionar o valor depositado em num ("Number(num.value")
        let item = document.createElement ('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' //para que ao adicionar um novo valor na lista, o res fique em branco de novo 


    } 
    else {
        window.alert ('Valor inválido ou já encontrado na lista.')
    }
    
    num.value = '' /* Esse comando foi posto por ultimo aqui pra que, quando o valor for adicionado na lista, ele automaticamente seja apagado do input. Exemplo, coloquei o número 8, e apertei o botão adicionar. Para que eu não precise ir la e apagar o valor da barra input, o proprio JavaScript ja faz a proxima leitura que é o espaço vazio ('') */
    num.focus() // comando focus para que a barrinha do mouse fique piscando dentro do input
}

function finalizar () {
    if (valores.length == 0) {
        window.alert (`Adicione valores antes de finalizar.`)
    }
    else {
        let tot = valores.length
        let maior = valores [0]
        let menor = valores [0]
        let soma = 0 
        let media = 0 
        for (let pos in valores) {

            soma += valores [pos]
            if (valores [pos] > maior) maior = valores [pos]
            if (valores [pos] < menor) 
            menor = valores [pos]


        }

        media = soma/tot //tem que botar ele depois dos codigos acima pra que ele passe primeiro pelo codigo de cima, leia o numero de valores, faça a soma dos valores e divida a soma pelo numero de valores que vai dar exatamente a media 

        res.innerHTML = ''
        res.innerHTML +=  `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p> A soma dos valores é ${soma} </p>`
        res.innerHTML += `<p> A média entre os valores é ${media} </p>`

    }
}