import useGetData from '../api/useGetData';

export const useOnTheAir = () => {
  const { data, isFetching } = useGetData('tv/on_the_air');

  return {
    isLoadingOnTheAirTVShows: isFetching,
    onTheAirTVShows: data?.results || [],
  };
};
