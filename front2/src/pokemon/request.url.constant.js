//export const URL = _NGX_ENV_.NG_APP_URL;
export const URL = process.env.REACT_APP_API_URL || "http://localhost:3000";
export const POKEMONS = "pokemons/";