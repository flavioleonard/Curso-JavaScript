
 let num = window.document.querySelector ('#txtn')
 let list = document.querySelector ('#lista')
 let valores = []
 let res = document.querySelector  ('#res')


function lista() {
   

    if (num.value.length == 0 ) { window.alert('Insira um número') }

    else {
        let n = Number(num.value)
        list.innerHTML += ''
        let item = document.createElement ('option')
                item.text += `O valor ${n} foi adicionado.`
                list.appendChild (item)

        

    }

    }


function resultado () {
    if (num.value.length == 0 ) { window.alert('Insira um número') }

    else {
        res.innerHTML = `Detectamos ${list.length} valores`
        


    }



}   

   
    

      
