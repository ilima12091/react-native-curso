import { useCallback, useEffect, useState } from 'react';
import { movieDbFetcher } from '../../config/adapters/movie-db.adapter';
import { getMovieByIdUseCase, getMovieCastUseCase } from '../../core/use-cases';
import { FullMovie } from '../../core/entities/movie.entity';
import { Cast } from '../../core/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<Cast[]>();

  const loadMovie = useCallback(async () => {
    setIsLoading(true);
    const [fetchedMovie, fetchedCast] = await Promise.all([
      getMovieByIdUseCase(movieDbFetcher, movieId),
      getMovieCastUseCase(movieDbFetcher, movieId),
    ]);

    setMovie(fetchedMovie);
    setCast(fetchedCast);
    setIsLoading(false);
  }, [movieId]);

  useEffect(() => {
    loadMovie();
  }, [movieId, loadMovie]);

  return {
    isLoading,
    movie,
    cast,
  };
};
