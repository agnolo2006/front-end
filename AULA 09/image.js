let imgs = [];

function carregarImagem(){
    const galeria = document.getElementById("galeria");
    galeria.innerHTML = '';

    images.array.array.forEach(imgURL => {
        const img = document.createAttribute("img");
        img.src = imgURL;
        galeria.appendChild(img)       
    });
}


document.getElementById('arquivos').addEventListener('change' , function(event){
const  arquivo = event.target.files[0];
const ler = new FileReader();

ler.onload = function(e){
    const imgURL = e.target.result;
    imagens.push(imgURL);
    carregarImagem();
}




    ler.readAsDataURL(arquivo)
})