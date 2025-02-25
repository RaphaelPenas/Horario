function turno(){

    var msg=document.querySelector(`#msg`)
    var img=document.querySelector(`#imagem`)
    var data= new Date()
    var hora= data.getHours() 
    var min= data.getMinutes()
    

    msg.innerHTML=`Agora são ${hora} horas e ${min} minutos`

    if(hora>=6 && hora<=12){
        img.src="imagens/Dia.jpg"
        document.body.style.background = `#F2D852`
    }
    else if(hora >12 && hora <=18 ){
        img.src="imagens/Tarde.jpg"
        document.body.style.background = `#9BA02C`

    }
    else{
        img.src="imagens/Noite.jpg"
        document.body.style.background = `#3B4B59`
    }
}



