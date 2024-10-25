// map -> cria uma nova lista
// no frontend(javascript + html) -> criar elementos
['Exemplo A', "Exemplo B", "Exemplo C"].map()

// forEach -> fazer algo com cada elemento da lista
['Exemplo A', "Exemplo B", "Exemplo C"].forEach()

// find -> encontra o primeiro elemento da lista
['Exemplo A', "Exemplo B", "Exemplo C"].find()

// filter -> filtra elementos da lista
['Exemplo A', "Exemplo B", "Exemplo C"].filter()

const base_dados = [
    {
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        number: 1,
        name: 'Bulbasaur',
        type: ['Grass', 'Poison'],
    },
    {
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
        number: 2,
        name: 'Ivysaur',
        type: ['Grass', 'Poison'],
    },
    {
        url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
        number: 3,
        name: 'Venusaur',
        type: ['Grass', 'Poison'],
    },
];

// map
base_dados.map((elemento, posicao) => /* executar código */)
base_dados.map((e, index) => /* executar código */)
base_dados.map((e, i) => /* executar código */) // <--- Esse é o mais comum
base_dados.map((e, i) => e.name) // Cria uma nova lista de nomes

// forEach
base_dados.forEach((elemento, posicao) => {
    /* executar código */
})

base_dados.forEach((e, index) => {
    /* executar código */
})

base_dados.forEach((e, i) => {
    /* executar código */
})

// find
const variavel_0 = base_dados.find((e, i) => /* executar código */)
const variavel_A = base_dados.find((e, i) => e.number === 1)

// filter
const variavel_1 = base_dados.filter((e, i) => /* executar código */)
const variavel_B = base_dados.filter((e, i) => e.name === "Bulbasaur")
