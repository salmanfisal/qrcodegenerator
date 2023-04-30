function generate(){
    if(input.value.length > 0){

    
    let imgcont=document.getElementById("cont-img");
    let cont = document.getElementById("img");
    let input = document.getElementById("input").value;
    img.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ input;
    imgcont.classList.add("show-img")
}else{
    input.classList.add("error")
    setTimeout(() => {
        input.classList.remove("error")
    }, 1000);
}
}