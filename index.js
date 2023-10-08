var seta_direita = window.document.getElementById("seta_direita")

var empreendimento = window.document.getElementById("empreendimento")
var anos = window.document.getElementById("anos")
var projetos = window.document.getElementById("projetos")

var seta_esquerda = window.document.getElementById("seta_esquerda")

function rolarparadireita() 
{
empreendimento.style = "display:none"
projetos.style = "display:flex"
seta_direita.style = "display:none"
seta_esquerda.style = "display:flex"
}

function rolarparaesquerda()
{
empreendimento.style = "display: flex"
projetos.style = "display: none"
seta_direita.style = "display:flex"
seta_esquerda.style = "display:none"
}
