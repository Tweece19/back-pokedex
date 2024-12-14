import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LoadableValue, Pokemon } from "../types";
import { HttpClient } from "@angular/common/http";
import { POKEMONS, URL } from "../constant/request.url.constant";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    constructor(private _http: HttpClient) {
        this._http.get<Pokemon[]>(URL + POKEMONS).subscribe(pokemons => {
            this._pokemons.next({ loading: false, value: pokemons })
        });
    }

    private _pokemons: BehaviorSubject<LoadableValue<Pokemon[]>> = new BehaviorSubject<LoadableValue<Pokemon[]>>({ loading: true });

    public getPokemons(): BehaviorSubject<LoadableValue<Pokemon[]>> {
        return this._pokemons;
    }
}
