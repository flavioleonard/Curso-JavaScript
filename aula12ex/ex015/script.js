function verificar () {
    var data = new Date()
    var ano = data.getFullYear ()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert ('Verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number (fano.value)
        var gênero = ''
        var img = document.createElement ('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
                gênero = 'homem'
                if (idade >=0 && idade < 10) {
                    
                    img.setAttribute('src', 'foto-criança-h.png')
                }
                else if (idade < 21)
                {
                    img.setAttribute('src', 'foto-jovem-h.png')
                }
                else if (idade <50)
                {
                    
                    img.setAttribute('src', 'foto-adulto-h.png')
                }
                else {
                    img.setAttribute('src', 'foto-idoso-h.png')
                    
                }
    } 
        else if ( fsex[1].checked) {
                gênero ='mulher'
                if (idade >=0 && idade < 10) {
                    
                    img.setAttribute('src', 'foto-criança-m.png')
                }
                else if (idade < 21)
                {
                    img.setAttribute('src', 'foto-jovem-m.png')
                }
                else if (idade <50)
                {
                    
                    img.setAttribute('src', 'foto-adulto-m.png')
                }
                else {
                    img.setAttribute('src', 'foto-idoso-m.png')
                    
                }

}
    }
    
    
    
    res.style.textAlign = 'center'
    img.style.display = 'flex'
    img.style.margin = 'auto'
    img.style.justifyContent = 'center'
    img.style.textAlign = 'center'
   

    res.innerHTML = `Detectamos <strong>${gênero}</strong> com <strong>${idade}</strong> anos.` 
    res.appendChild(img)

}
    


