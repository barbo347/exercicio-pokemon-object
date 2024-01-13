import { Pokemon } from "./type";

const ratata: Pokemon<"ratata", "normal"> = {
  name: "ratata",
  types: ["normal"],
  moves: [
    { name: "tackle", lv: 5 },
    { name: "hyper fang", lv: 20 },
    { name: "crunch", lv: 50 },
    { name: "quick attack", lv: 9 },
  ],
  ability: "static",
  preEvolution: null,
  evolution: "raticate",
  attributes: {
    hp: 70,
    attack: 95,
    defense: 24,
    specialAttack: 50,
    specialDefense: 90,
    speed: 10,
  },
};

module.exports = ratata;