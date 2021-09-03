
// função verifica se um valor é valido 
const isValid = x => {
  // verifica se o valor em x é diferente de undefined
  const notUndefined = x !== undefined
  // verifica se o valor em x é diferente de null
  const notNull = x !== null
  // transforma o valor em x em string
  const value = JSON.stringify(x)
  // verifica se o valor em x é diferente de '{}', '[]' e '""'
  const notEmpty = (value !== '{}') && (value !== '""') && value !== '[]'
  // e por fim, verifica se todas as clausulas validadas acima são verdadeiras
  return notUndefined && notEmpty && notNull
}

// função para retornar palavras com iniciais em maiusculas
const capitalize = (string) => {
  // se a palavra nao for válida retornará null
  if (!isValid(string)) return null

  // caso seja válida, vai separar as palavras por espaço e criar um array com elas
  let words = string.split(" ")
  // com esse array, utilizo o map para conseguir transformar a primeira inicial de cada palavra em maiuscula
  return words.map(
    (word) => `${word[0].toUpperCase()}${word.substring(1)}`
  ).join(" ") //ao final, uso join para juntar o array novamente em uma palavra apenas
}

module.exports = { isValid, capitalize }
