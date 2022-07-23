import useGetData from '../api/useGetData';

export const useTopRatedMovies = () => {
  const { data, isFetching } = useGetData('movie/top_rated');

  return {
    isLoadingTopRatedMovies: isFetching,
    topRatedMovies: data?.results || [],
  };
};
