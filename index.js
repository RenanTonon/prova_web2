document.addEventListener("DOMContentLoaded", () => {
    const botaoDialog = document.getElementById("buttonDialog");
    const dialog = document.querySelector("dialog");
    const voltar = document.getElementById("voltar");

    // Adiciona evento ao botão para abrir o modal
    botaoDialog.addEventListener("click", () => {
        dialog.showModal();
    });

    // Adiciona evento ao botão 'voltar' para fechar o modal
    voltar.addEventListener("click", () => {
        dialog.close();
    });

    // Cria o elemento de contagem de filtros apenas uma vez
    const iconButton = document.getElementById("buttonDialog");
    const contadorElement = document.createElement("span");
    contadorElement.className = "contador-filtros";
    iconButton.appendChild(contadorElement);

    // Função para atualizar a contagem de filtros ativos
    function atualizarContagemFiltros() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        // Array com os parâmetros que não devem ser contados como filtros ativos
        const parametrosIgnorados = ["page", "busca"];

        let contadorFiltrosAtivos = 0;

        // Itera sobre todos os parâmetros da query string
        for (const key of urlParams.keys()) {
            if (!parametrosIgnorados.includes(key)) {
                contadorFiltrosAtivos++;
            }
        }

        // Atualiza o conteúdo do elemento contador
        contadorElement.textContent = contadorFiltrosAtivos.toString();
    }

    // Atualiza a contagem de filtros ao carregar a página
    atualizarContagemFiltros();
});
