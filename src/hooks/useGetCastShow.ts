import useGetData from './api/useGetData';
import { Category } from '../interfaces/categoryInterface';

interface GetCast {
  category: Category;
  id: number;
}

export const useGetCastShow = ({ category, id }: GetCast) => {
  const { data, isFetching } = useGetData(`${category}/${id}/credits`);

  return {
    isLoadingCast: isFetching,
    cast: data?.cast || [],
  };
};
