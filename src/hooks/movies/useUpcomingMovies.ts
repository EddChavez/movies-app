import useGetData from '../api/useGetData';

export const useUpcomingMovies = () => {
  const { data, isFetching } = useGetData('movie/upcoming');

  return {
    isLoadingUpcomingMovies: isFetching,
    upcomingMovies: data?.results || [],
  };
};
