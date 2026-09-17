async function init() {
    // busca os livros da API e renderiza na tela 
    const livros = await buscarLivros();
    renderizarLivros(livros);
}

const listaLivros = document.getElementById("lista-livros");

listaLivros.addEventListener("click", async (evento) => {
    // descobre qual botao foi clicado e qual ação deve ser executada 
    const botao = evento.target.closest("button[data-action]");

    if (!botao) return;

    const acao = botao.dataset.action;

    // acha a div pai onde esta o id do livro e pegao id
    const acoesDiv = botao.closest("[data-id]");
    const id = acoesDiv.dataset.id;

    // decide qual função chamar, baseado no valor de data-action
    if (acao === "alugar") {
        await alugarLivro(id);
    } else if (acao === "devolver") {
        await devolverLivro(id);
    } else if (acao === "deletar") {
        await deletarLivro(id);
    }

    init();
});

const formLivro = document.getElementById("form-livro");

formLivro.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const anoPublicacao = document.getElementById("anoPublicacao").value;

    const novoLivro = { titulo, autor, anoPublicacao };

    await salvarLivro(novoLivro);

    formLivro.reset();
    init();
});

init();