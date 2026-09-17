async function init() {
    // busca os livros da API e renderiza na tela 
    const livros = await buscarLivros();
    renderizarLivros(livros);
}

init();