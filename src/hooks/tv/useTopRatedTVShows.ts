import useGetData from '../api/useGetData';

export const useTopRatedTVShows = () => {
  const { data, isFetching } = useGetData('tv/top_rated');

  return {
    isLoadingTopRatedTVShows: isFetching,
    topRatedTVShows: data?.results || [],
  };
};
