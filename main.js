const pai = document.querySelector(".contato__conteudo");
const validar = document.querySelector(".contato__submit");

validar.addEventListener("click", (event) => {
    // event.preventDefault(); // com ele o formulario n é enviado, infelizmente

    var novoElemento = document.createElement("p");
    novoElemento.classList = "teste";
    novoElemento.innerHTML = "email enviado!";
    
    pai.appendChild(novoElemento);
});
