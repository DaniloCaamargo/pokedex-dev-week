// Duas variáveis para trabalhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')


listaSelecaoPokemons.forEach(pokemon => {
    //Evento de clique feito pelo usuário na lista de pokemin
    pokemon.addEventListener('click', () =>{
        //remover a classe aberto só do cartão que está aberto

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //Ao clicar em um pokemon da listagem, pegamos o id do pokemon para saber qual cartão mostrar

        const idPokemonSelecionado = pokemon.attributes.id.value
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('aberto')

        // Remoção e adição da classe ativo (cor vermelha) no item da lista selecionado

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})