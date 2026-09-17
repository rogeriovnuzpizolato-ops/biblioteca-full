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