import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { movieApi } from './api';

export const fetchTrendingMovie = async () => {
  try {
    const response = await movieApi.get('/trending/movie/day');
    return response.data.results;
  } catch (error) {
    toast.error(error);
  }
};

export const getMovieInfo = async id => {
  try {
    const response = await movieApi.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    toast.error(error);
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await movieApi.get(`/movie/${id}/reviews`);
    return response.data;
  } catch (error) {
    toast.error(error);
  }
};

export const getMovieCredits = async id => {
  try {
    const response = await movieApi.get(`/movie/${id}/credits`);
    return response.data;
  } catch (error) {
    toast.error(error);
  }
};

export const getMoviesBySearch = async query => {
  try {
    const response = await movieApi.get(`/search/movie/`, {
      params: {
        query,
      },
    });
    return response.data;
  } catch (error) {
    toast.error(error);
  }
};
