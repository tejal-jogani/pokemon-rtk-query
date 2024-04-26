import { http, HttpResponse } from "msw";
import PokemonJson from "../../data/Pokemon.json";
import PokemonDetailsJson from "../../data/PokemonDetails.json";

const handlers = [
  http.get("https://pokeapi.co/api/v2/pokemon", () => {
    return HttpResponse.json(PokemonJson);
  }),
  http.get("*", () => {
    return HttpResponse.json(null, {
      status: 500,
    });
  }),
  http.get("https://pokeapi.co/api/v2/pokemon/1", () => {
    return HttpResponse.json(PokemonDetailsJson);
  })
];

export { handlers };
