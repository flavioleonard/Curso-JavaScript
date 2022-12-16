let num = [5, 8, 2, 9, 3]
// console.log(`Nosso vetor é o ${num}`)

num[2] = 4 //pra adicionar o número 4 no terceiro espaço 
num.push(1)
num.sort() //pra colocar os valores em ordem crescente
console.log(`O vetor tem ${num.length} posições `)
console.log(num)

//console.log(num[4]) pra mostrar o quinto termo
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf (13) //Comando para achar a posição de um valor dentro do vetor 
if (pos == -1) {
    console.log ('Valor não encontrado')
} else {
    console.log(`O valor do valor 4 está na posição ${pos}`)

}



