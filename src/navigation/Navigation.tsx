import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MoviesScreen } from '../screens/MoviesScreen';
import { TVScreen } from '../screens/TVScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';
import { ActorScreen } from '../screens/ActorScreen';
import { QRScanScreen } from '../screens/QRScanScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { Category } from '../interfaces/categoryInterface';
import { Tab, TabNavigator } from './TabNavigator';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: {
    category: Category;
    movie: Movie;
  };
  ActorDetailScreen: { actorId: number };
  QRScanScreen: undefined;
  SearchScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const BottomTabNavigator = () => (
  <TabNavigator>
    <Tab.Screen
      name="Peliculas"
      component={MoviesScreen}
      options={{ title: 'Películas' }}
    />
    <Tab.Screen name="Series" component={TVScreen} options={{ title: 'TV' }} />
  </TabNavigator>
);

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={BottomTabNavigator} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="ActorDetailScreen" component={ActorScreen} />
      <Stack.Screen name="QRScanScreen" component={QRScanScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};
