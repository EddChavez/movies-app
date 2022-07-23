import useGetData from '../api/useGetData';

export const useActorDetail = (actorId: number) => {
  const { data, isFetching } = useGetData(`person/${actorId}`);

  return { isLoadingActor: isFetching, actor: data };
};
