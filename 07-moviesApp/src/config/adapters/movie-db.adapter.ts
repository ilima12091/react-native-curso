import { AxiosAdapter } from './http/axios.adapter';
import { THE_MOVIE_DB_API_KEY } from '@env';

export const movieDbFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: THE_MOVIE_DB_API_KEY,
    language: 'es',
  },
});
