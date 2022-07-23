import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast } from '../interfaces/creditsInterface';
import { CastItem } from './CastItem';
import { Spinner } from './ui/Spinner';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
  isLoadingDetail: boolean;
  isLoadingCast: boolean;
}

export const MovieDetails = ({
  movieFull,
  cast,
  isLoadingDetail,
  isLoadingCast,
}: Props) => {
  return (
    <>
      {isLoadingDetail ? (
        <Spinner />
      ) : (
        <View style={detailStyles.container}>
          <View style={detailStyles.rate}>
            <Icon name="star-half" color="#3B3B39" size={16} />
            <Text> {movieFull?.vote_average}</Text>
            <Text style={detailStyles.genres}>
              - {movieFull?.genres.map((g) => g.name).join(', ')}
            </Text>
          </View>
          {!!movieFull?.overview && (
            <>
              <Text style={detailStyles.header}>Historia</Text>
              <Text style={detailStyles.overview}>{movieFull?.overview}</Text>
            </>
          )}
          <Text style={detailStyles.header}>Presupuesto</Text>
          <Text style={detailStyles.budget}>
            {currencyFormatter.format(movieFull?.budget, { code: 'USD' })}
          </Text>
        </View>
      )}
      {isLoadingCast ? (
        <Spinner />
      ) : (
        cast.length > 0 && (
          <View style={castingStyles.container}>
            <Text style={castingStyles.actorsHeader}>Actores</Text>
            <FlatList
              data={cast}
              keyExtractor={(item, index) => item.id.toString() + index}
              renderItem={({ item }) => <CastItem actor={item} />}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={castingStyles.actorsList}
            />
          </View>
        )
      )}
    </>
  );
};

const detailStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  rate: {
    flexDirection: 'row',
  },
  genres: {
    marginLeft: 5,
  },
  header: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  budget: {
    fontSize: 18,
  },
  overview: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

const castingStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  actorsHeader: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  actorsList: {
    marginTop: 10,
    height: 70,
  },
});
