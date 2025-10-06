import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBCastResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { CastMapper } from '../../../infrastructure/mappers/cast.mapper';
import { Cast } from '../../entities/cast.entity';

export const getMovieCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<Cast[]> => {
  try {
    const { cast } = await fetcher.get<MovieDBCastResponse>(
      `/${movieId}/credits`,
    );

    const mappedCast = cast.map(CastMapper.fromMovieDbCastToEntity);
    return mappedCast;
  } catch (error) {
    console.error('Could not fetch movie cast:', error);
    throw new Error('Could not fetch movie cast');
  }
};
