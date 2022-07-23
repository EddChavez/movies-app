import { useEffect, useState } from 'react';
import { Category } from '../interfaces/categoryInterface';
import { useDebouncedSetValue } from './utils/useDebouncedSetValue';
import API from '../api/movieDB';

export const useSearch = () => {
  const [value, onChangeText] = useState('');
  const debouncedValue = useDebouncedSetValue(value);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<any>();

  useEffect(() => {
    async function search() {
      try {
        setIsLoading(true);
        const { data } = await API.get(`/search/multi?query=${debouncedValue}`);
        const filterItems = data?.results.filter(
          ({ media_type }: any) =>
            media_type === Category.Movie || media_type === Category.TVShow,
        );
        setMovies(filterItems);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (debouncedValue) {
      search();
    }
  }, [debouncedValue]);

  return { isLoading, movies, onChangeText, value };
};
