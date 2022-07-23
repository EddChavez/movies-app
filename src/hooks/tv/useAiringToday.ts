import useGetData from '../api/useGetData';

export const useAiringToday = () => {
  const { data, isFetching } = useGetData('tv/airing_today');

  return {
    isLoadingAiringTodayTVShows: isFetching,
    airingTodayTVShows: data?.results || [],
  };
};
