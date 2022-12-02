


/*let = var (tem a mesma função) */

function contar () {
let ini = window.document.getElementById('txti')
let fim = window.document.getElementById('txtf')
let passo = window.document.getElementById('txtp')
let res = window.document.getElementById('res')

if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    //window.alert ('[ERRO] Faltam dados!')
    res.innerHTML= 'Impossível contar'
} else {
     res.innerHTML = 'Contando: <br>'   
     let i = Number(ini.value)
     let f =Number(fim.value)
     let p = Number(passo.value) 
     
     if (i < f ) {for (let c = i; c <= f ; c+= p) /*let = var (também funciona como uma vaga que o dado vai estacionar) let c = i, enquanto c for menor ou igual a f (valor de fim) c recebe ele mesmo + p (c+=p) */ {
        res.innerHTML += ` ${c} \u{1f449} `
        

     } res.innerHTML += `\u{1f3c1}`}
     /* O else abaixo é pra caso a contagem seja decrescente */

     else {

        for ( let c = i; c >= f ; c-= p)
        {
            res.innerHTML += ` ${c} \u{1f449} `
        }
        res.innerHTML += `\u{1f3c1}`
     }


     

}

}


