let valores = [8,1,4,7,2,9]

//for (pos = 0;pos < valores.length;pos++){console.log (`A posição ${pos} tem o valor ${valores[pos]}`)}

for (let pos in valores) {
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}

//Esse debaixo é a mesma coisa da de cima. 