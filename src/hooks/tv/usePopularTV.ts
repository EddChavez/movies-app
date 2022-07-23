import useGetData from '../api/useGetData';

export const usePopularTVShows = () => {
  const { data, isFetching } = useGetData('tv/popular');

  return {
    isLoadingPopularTVShows: isFetching,
    popularTVShows: data?.results || [],
  };
};
