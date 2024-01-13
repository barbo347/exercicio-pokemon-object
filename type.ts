export type Pokemon<T extends string, U extends string> = {
    name: T;
    types: U[];
    moves: {
        name: string;
        lv: number;
    }[];
    ability: string;
    preEvolution: null | string;
    evolution: string | null;
    attributes: {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
};
