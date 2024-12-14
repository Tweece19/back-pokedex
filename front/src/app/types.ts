export enum PokemonType {
    FIRE = 'fire',
    WATER = 'water',
    GRASS = 'grass',
}

export type Pokemon = {
    id: number
    name: string
    type: PokemonType
    hp: number
}

type Loading = { loading: true };

export type Loaded<T> = { loading: false; value: T };

export type LoadableValue<T> = Loading | Loaded<T>;