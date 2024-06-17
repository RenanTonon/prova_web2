document.addEventListener("DOMContentLoaded", () => {
    const botaoDialog = document.getElementById("buttonDialog");
    const dialog = document.getElementById("dialog-template");
    const voltar = document.getElementById("voltar");
    const aplicar = document.getElementById("aplicar-botao");

    
    botaoDialog.addEventListener("click", () => {
        dialog.showModal();
    });

    
    voltar.addEventListener("click", () => {
        dialog.close();
    });

    
    aplicar.addEventListener("click", (event) => {
        event.preventDefault(); 
        dialog.close();
        buscarNoticias();
    });

    
    async function buscarNoticias() {
        
        const queryString = new URLSearchParams(parametros).toString();
        const url = `http://servicodados.ibge.gov.br/api/v3/noticias?${queryString}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Erro ao buscar notícias');
            }
            const noticias = await response.json();
            console.log('Notícias encontradas:', noticias);
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }


});
