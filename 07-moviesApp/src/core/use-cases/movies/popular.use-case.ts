import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { PopularResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<PopularResponse>('/popular');

    return popular.results.map(MovieMapper.fromMovieDbResultToEntity);
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw new Error('Could not fetch popular movies');
  }
};
