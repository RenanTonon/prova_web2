document.addEventListener("DOMContentLoaded", () => {
    const botaoDialog = document.getElementById("buttonDialog");
    const dialog = document.querySelector("dialog");
    const voltar = document.getElementById("voltar");

    
    botaoDialog.addEventListener("click", () => {
        dialog.showModal();
    });

   
    voltar.addEventListener("click", () => {
        dialog.close();
    });

    
    const iconButton = document.getElementById("buttonDialog");
    const contadorElement = document.createElement("span");
    contadorElement.className = "contador-filtros";
    iconButton.appendChild(contadorElement);

    
    function atualizarContagemFiltros() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

       
        const parametrosIgnorados = ["page", "busca"];

        let contadorFiltrosAtivos = 0;

        
        for (const key of urlParams.keys()) {
            if (!parametrosIgnorados.includes(key)) {
                contadorFiltrosAtivos++;
            }
        }

       
        contadorElement.textContent = contadorFiltrosAtivos.toString();
    }

    
    atualizarContagemFiltros();
});
