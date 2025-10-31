import { getColorFromImage } from '../../config/helpers/get-color';
import { Pokemon } from '../../domain/entities/pokemon';
import { PokeAPIPokemonResponse } from '../interfaces/pokeapi.interfaces';

export class PokemonMapper {
  static async pokeApiPokemonToEntity(
    data: PokeAPIPokemonResponse,
  ): Promise<Pokemon> {
    const sprites = PokemonMapper.getSprites(data);
    const avatar = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

    // const color = await getColorFromImage(
    //   'https://static.wikia.nocookie.net/pokemongo_gamepedia_en/images/d/dd/Unknown.png',
    // );
    const color = (await getColorFromImage(avatar)) ?? 'grey';

    return {
      id: data.id,
      name: data.name,
      types: data.types.map(({ type }) => type.name),
      color,
      avatar,
      sprites,
      games: data.game_indices.map(({ version }) => version.name),
      stats: data.stats.map(({ base_stat, stat }) => ({
        name: stat.name,
        value: base_stat,
      })),
      abilities: data.abilities.map(({ ability }) => ability?.name ?? '-'),
      moves: data.moves
        .map(({ move, version_group_details }) => ({
          name: move.name,
          level: version_group_details[0]?.level_learned_at ?? 0,
        }))
        .sort((a, b) => a.level - b.level),
    };
  }

  static getSprites(data: PokeAPIPokemonResponse): string[] {
    const sprites: string[] = [
      data.sprites.front_default,
      data.sprites.back_default,
      data.sprites.front_shiny,
      data.sprites.back_shiny,
    ];

    if (data.sprites.other?.home.front_default)
      sprites.push(data.sprites.other?.home.front_default);
    if (data.sprites.other?.['official-artwork'].front_default)
      sprites.push(data.sprites.other?.['official-artwork'].front_default);
    if (data.sprites.other?.['official-artwork'].front_shiny)
      sprites.push(data.sprites.other?.['official-artwork'].front_shiny);
    if (data.sprites.other?.showdown.front_default)
      sprites.push(data.sprites.other?.showdown.front_default);
    if (data.sprites.other?.showdown.back_default)
      sprites.push(data.sprites.other?.showdown.back_default);

    return sprites;
  }
}
