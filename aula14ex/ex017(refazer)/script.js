function tabuada () {
    var n = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')

    if (n.value.length == 0)
    {
        window.alert('[Error] Por favor, digite um número')
    } else {

        let num = Number(n.value)
        tab.innerHTML =''

        for (c = 1; c <= 10; c++) {

            let item = document.createElement ('option')
            item.text = `${num}x${c}=${num*c}`
            tab.appendChild(item)
        }
    }

    




}