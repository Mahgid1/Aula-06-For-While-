
const botao = document.getElementById("Gerar");
const lista = document.getElementById("lista");
const numero = document.getElementById("numero");

botao.addEventListener("click", function() {
    lista.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        const item = document.createElement("li");
        item.textContent = `${numero.value} x ${i} = ${numero.value * i}`;
        lista.appendChild(item);
    }
});
