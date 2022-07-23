import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { View } from 'react-native';
import { useSearch } from '../hooks/useSearch';
import { SearchBar } from '../components/SearchBar';
import { SearchList } from '../components/SearchList';

interface Props extends StackScreenProps<RootStackParams, 'SearchScreen'> {}

export const SearchScreen = ({}: Props) => {
  const { isLoading, movies, onChangeText, value } = useSearch();

  return (
    <View style={{ flex: 1 }}>
      <SearchList isLoading={isLoading} items={movies} isSearched={!!value} />
      <SearchBar {...{ onChangeText, value }} />
    </View>
  );
};
