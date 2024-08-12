const formulario = document.querySelector(".cadastro")
const mascaraCadastro = document.querySelector(".mascara-cadastro")

function buttonCadastro(){
    formulario.style.left = "50%"
    formulario.style.transform = "translateX(-50%)"
    mascaraCadastro.style.visibility = "visible"
}

function clickMascara(){
    mascaraCadastro.style.visibility = "hidden"
    formulario.style.left = "-350px"
    formulario.style.transform = "translateX(0)"
}