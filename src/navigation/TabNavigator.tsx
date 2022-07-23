import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';

export type BottomTabParams = {
  Peliculas: undefined;
  Series: undefined;
};

export const Tab = createBottomTabNavigator<BottomTabParams>();

export const TabNavigator: React.FC = ({ children }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          if (route.name === 'Peliculas') {
            iconName = 'movie';
          } else if (route.name === 'Series') {
            iconName = 'live-tv';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FCFCFC',
        tabBarInactiveTintColor: '#707277',
        tabBarStyle: {
          backgroundColor: '#060606',
        },
        headerStyle: {
          backgroundColor: '#060606',
        },
        headerTitleStyle: {
          color: '#FCFCFC',
        },
        headerRightContainerStyle: {
          paddingRight: 10,
        },
        headerRight: () => (
          <View style={{ flexDirection: 'row' }}>
            <View style={{ marginRight: 20 }}>
              <Icon
                onPress={() => navigation.navigate('SearchScreen')}
                name="search"
                color="white"
                size={30}
              />
            </View>
            <Icon
              onPress={() => navigation.navigate('QRScanScreen')}
              name="qr-code-scanner"
              color="white"
              size={30}
            />
          </View>
        ),
      })}
    >
      {children}
    </Tab.Navigator>
  );
};
