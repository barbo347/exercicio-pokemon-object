const pokemon = {
  name: "raticate",
  types: ["normal", "dark"],
  moves: [
    {
      name: "tackle",
      lv: 5
    }, {
      name: "hyper fang",
      lv: 20
    }, {
      name: "crunch",
      lv: 50
    }, {
      name: "quick attack",
      lv: 9
    }, {
      name: "sucker punch",
      lv: 19
    }, {
      name: "hyperbeam",
      lv: 99
    }, {
      name: "tail wip",
      lv: 67
    }],
  ability: "static",
  preEvolution: "ratata",
  evolution: null,
  attributes: {
    hp: 170,
    attack: 105,
    defense: 54,
    specialAttack: 80,
    specialDefense: 110,
    speed: 50
  }
}

module.exports = pokemon