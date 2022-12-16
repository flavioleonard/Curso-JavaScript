function tabuada () { 
        let num = window.document.getElementById ('txtn')
        let tab = window.document.getElementById ('seltab')
  
    
    

    if (num.value.length == 0) {
         window.alert('Por favor, digite um número')  
        }

    else {
             let n = Number(num.value)
             tab.innerHTML = ''

             for (let c = 1; c <= 10; c++) {

                let item = document.createElement ('option')
                item.text= `${n} x ${c} = ${n*c}`
                tab.appendChild (item)
                
             }


    }



}


//pra criar um elemento dentro de "item" que na linha "tab.appendChild vira um filho de tab que é um var de seltab"