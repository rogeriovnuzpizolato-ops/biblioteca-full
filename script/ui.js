function renderizarLivros(livros) {
    // pega lista de Livros do DOM 
    const listaLivros = document.getElementById("lista-livros");

    // limpa a lista de livros antes de renderizar os novos cards 
    listaLivros.innerHTML = "";

    // percorre o array de livros e cria um card para cada livro 
    livros.forEach((livro) => {
        const card = document.createElement("div");
        card.className = "livro-card";

        // mostra o status do livro
        const statusClasse = livro.disponivel ? "disponivel" : "emprestado";

        const statusTexto = livro.disponivel ? "Disponível" : "Emprestado";

        card.innerHTML = `
            <div class="livro-info">
                <strong>${livro.titulo}</strong>
                <span>${livro.autor} — ${livro.anoPublicacao}</span>
                <span class="${statusClasse}">${statusTexto}</span>
            </div>
            <div class="livro-acoes" data-id="${livro.id}">
                <button class="btn-alugar" data-action="alugar">Alugar</button>
                <button class="btn-devolver" data-action="devolver">Devolver</button>
                <button class="btn-deletar" data-action="deletar">Excluir</button>
            </div>
        `;

        listaLivros.appendChild(card);
    });
}