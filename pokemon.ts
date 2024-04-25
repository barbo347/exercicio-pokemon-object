const printPokemon = (pkm: any) => {
  console.log(`  Nome: ${pkm.name.charAt(0).toUpperCase() + pkm.name.slice(1)} - Tipo: ${pkm.types[0].charAt(0).toUpperCase() + pkm.types[0].slice(1)}
  Habilidade: ${pkm.ability.charAt(0).toUpperCase() + pkm.ability.slice(1)}

  Linha de evolução:
    ${pkm.preEvolution.charAt(0).toUpperCase() + pkm.preEvolution.slice(1)} >> ${pkm.name.toUpperCase()} >> ${pkm.evolution.charAt(0).toUpperCase() + pkm.evolution.slice(1)}

  Atributos:

    HP: ${pkm.attributes.hp}
    ATK: ${pkm.attributes.attack} SpATK: ${pkm.attributes.specialAttack}
    DEF: ${pkm.attributes.defense} SpDEF: ${pkm.attributes.specialDefense} 
    SPEED: ${pkm.attributes.speed}

  Ataques:  
  `);
  pkm.moves
    .sort((a: any, b: any) => a.lv - b.lv)
    .forEach((move: any) => {
      console.log(
        `    Lv ${move.lv} - ${move.name.charAt(0).toUpperCase() + move.name.slice(1)}`,
      );
    });
};

export { printPokemon };