import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { UpcomingResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<UpcomingResponse>('/upcoming');

    return upcoming.results.map(MovieMapper.fromMovieDbResultToEntity);
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw new Error('Could not fetch upcoming movies');
  }
};
