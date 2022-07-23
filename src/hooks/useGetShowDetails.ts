import useGetData from './api/useGetData';
import { Category } from '../interfaces/categoryInterface';

interface GetDetails {
  category: Category;
  id: number;
}

export const useGetShowDetails = ({ category, id }: GetDetails) => {
  const { data, isFetching } = useGetData(`${category}/${id}`);

  return {
    isLoadingDetail: isFetching,
    detailShow: data || undefined,
  };
};
