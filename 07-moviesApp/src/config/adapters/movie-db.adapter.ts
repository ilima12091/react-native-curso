import { AxiosAdapter } from './http/axios.adapter';

export const movieDbFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '93cd17461b5e02b7cd5389b64d5b3a99',
    language: 'es',
  },
});
