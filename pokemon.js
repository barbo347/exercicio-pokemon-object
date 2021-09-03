const { capitalize, isValid } = require('./utils')

/* formatPokemonMove, recebe um "lv" e um "name" e retorna a string 
  por exemplo:
    formatPokemonMove(5, "thunder wave")
    e retorna "Lv 5 - Thunder Wave" */
const formatPokemonMove = (move) => {
  const spaces = "   "
  return `${spaces} Lv ${move.lv} - ${capitalize(move.name)}`
}

const sortMoves = (moves) => {
  // retornamos a lista de objetos ordenada para variavel sortableMoves
  const sortableMoves = moves.sort(
    (moveA, moveB) => moveA.lv - moveB.lv
  )

  /* com auxilio da função map e da função de formatar o ataque, 
    criamos um array de strings */
  const attackList = sortableMoves.map(
    (move) => formatPokemonMove(move)
  )

  /* e logo apos usamos o join para juntar todas
  com o detalhe de quebrar a linha entre cada um elemento desse array */
  return attackList.join("\n")
}

// formata o nome dos pokemons caso sejam validos
const formatPokemonName = (pokemonName) => {
  // retorna true ou false em caso do valor do nome do pokemon ser valido
  const hasValidName = isValid(pokemonName)
  // se o nome for valido, ele aplica o capitalize
  // se nao, retorna null
  return hasValidName ? capitalize(pokemonName) : null
}

const getEvolution = (pokemon) => {
  let evolutionLine = []

  // recebe o valor do nome transformado em maiusculo
  const name = pokemon.name.toUpperCase()
  // recebe o valor do preEvolution transformado em capitalize ou null
  const preEvolution = formatPokemonName(pokemon.preEvolution)
  // recebe o valor do evolution transformado em capitalize ou null
  const evolution = formatPokemonName(pokemon.evolution)

  // se existe pre evolução e evolução
  if (preEvolution && evolution) {
    // um array com a ordem de evolução é criado
    evolutionLine = [preEvolution, name, evolution]
  }

  // se nao existe pré evolucao e evolução
  if (!preEvolution && !evolution) {
    // um array com apenas o nome do pokemon é criado
    evolutionLine = [name]
  }

  // se nao existe pré evolução, mas existe evolução
  if (!preEvolution && evolution) {
    // um array com a ordem de evolução é criado
    evolutionLine = [name, evolution]
  }

  // se existe pré evolução, mas não existe evolução
  if (preEvolution && !evolution) {
    // um array com a ordem de evolução é criado
    evolutionLine = [preEvolution, name]
  }

  // é adicionado simbolo >> entre os elementos do array
  return evolutionLine.join(" >> ")
}

// função que retorna uma string contendo todas as informações do pokemon editadas
const printPokemon = pkm => {
  // transforma o nome em capitalize
  const name = capitalize(pkm.name)
  // transforma as strings dos tipos em capitalize
  const types = pkm.types.map(type => capitalize(type))
  // transforma a ability em capitalize
  const ability = capitalize(pkm.ability)
  // recebe a linha da evolução do pokemon
  const evolution = getEvolution(pkm)
  // recebe os ataques ordenados e formatados
  const moves = sortMoves(pkm.moves)

  // cria uma interpolação dos valores acima com o template pedido da questão
  const template = `  Nome: ${name} - Tipo: ${types.join(" / ")}
  Habilidade: ${ability}

  Linha de evolução:
    ${evolution}

  Atributos:

    HP: ${pkm.attributes.hp}
    ATK: ${pkm.attributes.attack} SpATK: ${pkm.attributes.specialAttack}
    DEF: ${pkm.attributes.defense} SpDEF: ${pkm.attributes.specialDefense}
    SPEED: ${pkm.attributes.speed}

  Ataques: \n${moves}`

  console.log(template)
}

module.exports = { printPokemon }