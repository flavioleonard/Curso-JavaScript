function contar () {
    var ini = window.document.getElementById ('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {

        window.alert ('[ERRO] Preencha todos os campos por favor')

    } 

    else if (passo.value == 0) 
        {
            window.alert ('[ERRO] Passo deve ser diferente de 0')
        }
       

    else {
        res.innerHTML = 'Contando... <br>'

        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (i < f) {for ( var c = i; c <= f; c += p) {


            res.innerHTML += `${c} \u{1f449}`
        }

        res.innerHTML += `\u{1f3c1}`

        }
        else if ( i == f) {
            window.alert ('[ERRO] Contagem não possível')
        }

        

        else {
            for ( var c = i; c >= f; c-= p) {res.innerHTML += `${c} \u{1f449}`


            } res.innerHTML += `\u{1f3c1}`


        }

        






}





}