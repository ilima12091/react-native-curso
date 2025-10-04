import React, { useCallback, useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';
import {
  moviesNowPlayingUseCase,
  moviesPopularUseCase,
  moviesTopRatedUseCase,
  moviesUpcomingUseCase,
} from '../../core/use-cases';
import { movieDbFetcher } from '../../config/adapters/movie-db.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  const initialLoad = useCallback(async () => {
    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        moviesNowPlayingUseCase(movieDbFetcher),
        moviesPopularUseCase(movieDbFetcher),
        moviesTopRatedUseCase(movieDbFetcher),
        moviesUpcomingUseCase(movieDbFetcher),
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    initialLoad();
  }, [initialLoad]);

  return { nowPlaying, popular, topRated, upcoming, isLoading };
};
