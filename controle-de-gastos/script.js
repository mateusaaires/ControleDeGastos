var total = 0;
var quantidade = 0

var alimentacao = 0;
var transporte = 0;
var lazer = 0;
var estudos = 0;
var outros = 0;

document.getElementById("maiorGasto").textContent = "Nenhum gasto cadastrado"

function adcionarGasto() {
    var descricao = document.getElementById("descricao").value;
    var valor = document.getElementById("valor").value;
    var categoria = document.getElementById("categoria").value

    if(descricao == "" || valor == "") {
        alert('Preencha todos os campos')
        return
    }

    if(valor <= 0){
        alert("Digite um valor maior que zero!")
        return
    }

    if (categoria == "Alimentação") {
        alimentacao = alimentacao + Number(valor);
    }
    if (categoria == "Transporte") {
        transporte = transporte + Number(valor);
    }
    if (categoria == "Lazer") {
        lazer = lazer + Number(valor);
    }
    if (categoria == "Estudos") {
        estudos = estudos + Number(valor);
    }
    if (categoria == "Outros") {
        outros = outros + Number(valor);
    }

    var novoGasto = document.createElement("li");
    novoGasto.className = "gasto"
    novoGasto.textContent = descricao + " - R$ " + Number(valor).toFixed(2).replace(".",",") + " - " + categoria;
    document.getElementById("listaDeGastos").appendChild(novoGasto);

    var botaoExcluir = document.createElement("button")
    botaoExcluir.textContent = "Excluir"
    novoGasto.appendChild(botaoExcluir)

    var valorGasto = valor

    botaoExcluir.onclick = function() {
        novoGasto.remove()
        total = total - valorGasto
        if (categoria == "Alimentação") {
            alimentacao = alimentacao - Number(valorGasto)
        } 
        if (categoria == "Transporte"){
            transporte = transporte - Number(valorGasto)
        } 
        if (categoria == "Lazer") {
            lazer =lazer - Number(valorGasto)
        }
        if (categoria == "Estudos") {
            estudos = estudos - Number(valorGasto)
        }
        if (categoria == "Outros") {
            outros = outros - Number(valorGasto)
        }

        var maiorCategoria = "Alimentação"
        var maiorValor = alimentacao

        if (transporte > maiorValor){
            maiorCategoria = "Transporte"
            maiorValor = transporte
        }

        if (lazer > maiorValor) {
            maiorCategoria = "Lazer"
            maiorValor = lazer
        }
        
        if (estudos > maiorValor) {
            maiorCategoria = "Estudos"
            maiorValor = estudos
        }

        if (outros > maiorValor) {
            maiorCategoria = "Outros"
            maiorValor = outros
        }

        document.getElementById("maiorGasto").textContent =
            maiorCategoria + " - R$ " + maiorValor.toFixed(2).replace(".", ",")

        document.getElementById("categorias").innerHTML =
            "Alimentação: R$ " + alimentacao.toFixed(2).replace(".", ",") + "<br>" +
            "Transporte: R$ " + transporte.toFixed(2).replace(".", ",") + "<br>" +
            "Lazer: R$ " + lazer.toFixed(2).replace(".", ",") + "<br>" +
            "Estudos: R$ " + estudos.toFixed(2).replace(".", ",") + "<br>" +
            "Outros: R$ " + outros.toFixed(2).replace(".", ",");
        
        quantidade = quantidade - 1;
        document.getElementById("quantidade").textContent = "Quantidade de gastos: " + quantidade;

        if(quantidade == 0) {
            document.getElementById("maiorGasto").textContent = "Nenhum gasto cadastrado"
        }

        if(quantidade == 0) {
            document.getElementById("categorias").textContent = "Nenhum gasto cadastrado"
        }

        document.getElementById("total").textContent = "Total: R$ " + total.toFixed(2).replace(".", ",")
    }

    var valor = document.getElementById("valor").value;
    valor = Number(valor).toFixed(2)
    valor = Number(valor)
    total = total + valor

    quantidade = quantidade + 1;
    document.getElementById("quantidade").textContent = "Quantidade de gastos: " + quantidade;

    document.getElementById("total").textContent = "Total: R$ " + total.toFixed(2).replace(".", ",")

    document.getElementById("descricao").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("categoria").value = "Alimentação"

    document.getElementById("categorias").innerHTML = 
    "Alimentação: R$ " + alimentacao.toFixed(2).replace(".", ",") + "<br>" +
    "Transporte: R$ " + transporte.toFixed(2).replace(".", ",") + "<br>" +
    "Lazer: R$ " + lazer.toFixed(2).replace(".", ",") + "<br>" +
    "Estudos: R$ " + estudos.toFixed(2).replace(".", ",") + "<br>" +
    "Outros: R$ " + outros.toFixed(2).replace(".", ",")

    var maiorCategoria = "Alimentação"
    var maiorValor = alimentacao

    if (transporte > maiorValor) { 
        maiorCategoria = "Transporte"
        maiorValor = transporte
    }
    if (lazer > maiorValor) {
        maiorCategoria = "Lazer"
        maiorValor = lazer
    }
    if (estudos > maiorValor) {
        maiorCategoria = "Estudos"
        maiorValor = estudos
    }
    if (outros > maiorValor) {
        maiorCategoria = "Outros"
        maiorValor = outros
    }

    document.getElementById("maiorGasto").textContent =
        maiorCategoria + " - R$ " + maiorValor.toFixed(2).replace(".", ",")
}

function limparGasto() {
    if (confirm("Tem certeza que deseja limpar todos os gastos?") == false) {
        return
    }
    document.getElementById("listaDeGastos").innerHTML = ""

    total = 0
    quantidade = 0

    alimentacao = 0
    transporte = 0
    lazer = 0
    estudos = 0
    outros = 0

    document.getElementById("total").textContent = "Total: R$ 0,00"
    document.getElementById("quantidade").textContent = "Quantidade de gastos: 0"

    document.getElementById("categorias").textContent = "Nenhum gasto cadastrado"
    document.getElementById("maiorGasto").textContent = "Nenhum gasto cadastrado"
}