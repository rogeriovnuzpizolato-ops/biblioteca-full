// endereço base da API 
const API_URL = "http://localhost:8080/livros";

async function buscarLivros() {
    // requisição HTTP(get) para a API 
    const resposta = await fetch(API_URL);
    // transformando a resposta em JSON 
    const livros = await resposta.json();
    // devolve o array de livros 
    return livros;
}

// salvar livro
async function salvarLivro(livro) {
    const resposta = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(livro)
    });

    return await resposta.json();
}

// alugar livro
async function alugarLivro(id) {
    const resposta = await fetch(`${API_URL}/${id}/alugar`, {
        method: "PUT"
    });
    return await resposta.json();
}

// devolver livro 
async function devolverLivro(id) {
    const resposta = await fetch(`${API_URL}/${id}/devolver`, {
        method: "PUT"
    });
    return await resposta.json();
}

// deletar livro 
async function deletarLivro(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });
}