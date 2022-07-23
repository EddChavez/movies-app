import React from 'react';
import { Dimensions, ScrollView, View, Text, StyleSheet } from 'react-native';
import { MoviePoster } from './MoviePoster';
import { Spinner } from './ui/Spinner';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  items: [];
  isLoading: boolean;
  isSearched: boolean;
}

const posterWidth = Dimensions.get('screen').width / 2 - 30;

export const SearchList = ({ items, isLoading, isSearched }: Props) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (isSearched && items?.length === 0) {
    return (
      <View style={styles.wrapperEmptylist}>
        <Icon color="grey" name="search" size={60} />
        <Text style={styles.messageEmptyList}>
          No se han encontrado resultados para tu búsqueda
        </Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.wrapperList}>
        {items?.map((item: any) => (
          <MoviePoster
            key={item.id}
            movie={item}
            width={posterWidth}
            height={220}
            category={item?.media_type}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapperList: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: 80,
  },
  wrapperEmptylist: {
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  messageEmptyList: {
    color: 'grey',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
});
