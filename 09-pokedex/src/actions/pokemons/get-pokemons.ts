import { pokeApi } from '../../config/api/pokeApi';
import { Pokemon } from '../../domain/entities/pokemon';
import type {
  PokeAPIPaginatedResponse,
  PokeAPIPokemonResponse,
} from '../../infrastructure/interfaces/pokeapi.interfaces';
import { PokemonMapper } from '../../infrastructure/mappers/pokemon.mapper';

export const getPokemons = async (
  page: number,
  limit: number = 20,
): Promise<Pokemon[]> => {
  try {
    const url = `/pokemon?offset=${page * 10}&limit=${limit}`;
    const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url);

    const pokemonPromises = data.results.map(pokemon => {
      return pokeApi.get<PokeAPIPokemonResponse>(pokemon.url);
    });

    const pokeApiPokemons = await Promise.all(pokemonPromises);

    const pokemonDetailPromises = pokeApiPokemons.map(pokemon =>
      PokemonMapper.pokeApiPokemonToEntity(pokemon.data),
    );

    const pokemons = await Promise.all(pokemonDetailPromises);

    console.log('pokemons: ', pokemons);

    return pokemons;
  } catch (error) {
    throw new Error('Error fetching pokemons');
  }
};
