import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { PopularResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

interface Options {
  page?: number;
  limit?: number;
}

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<PopularResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
        limit: options?.limit ?? 20,
      },
    });

    return popular.results.map(MovieMapper.fromMovieDbResultToEntity);
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw new Error('Could not fetch popular movies');
  }
};
