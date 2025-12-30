import { API_URL_ANDROID, API_URL_IOS, API_URL as PROD_URL, STAGE } from '@env';
import axios, { AxiosHeaders } from 'axios';
import { Platform } from 'react-native';
import { StorageAdapter } from '../adapters/storage.adapter';

const platformUrl = Platform.OS === 'ios' ? API_URL_IOS : API_URL_ANDROID;

export const API_URL = STAGE === 'production' ? PROD_URL : platformUrl;

const tesloApi = axios.create({
  baseURL: API_URL,
});

tesloApi.interceptors.request.use(async config => {
  const token = await StorageAdapter.getItem('token');

  const headers = AxiosHeaders.from(config.headers);
  if (token) headers.set('Authorization', `Bearer ${token}`);

  const isFormData = Array.isArray((config.data as any)?._parts); // RN-safe

  if (isFormData) {
    headers.set('Content-Type', undefined);
    headers.delete('Content-Type');
    headers.delete('content-type');
  }

  config.headers = headers;

  return config;
});

export { tesloApi };
