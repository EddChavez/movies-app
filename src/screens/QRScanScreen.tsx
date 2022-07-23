import React, { useCallback, useState } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';
import { useIsFocused } from '@react-navigation/core';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import movieDB from '../api/movieDB';
import { MovieDBMoviesResponse } from '../interfaces/movieInterface';
import { throttle } from 'throttle-debounce';
import { Category } from '../interfaces/categoryInterface';

export const QRScanScreen = () => {
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);
  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const MATCHING_REGEX = /movie_id:([0-9]+);category:([a-zA-Z]+)/;

  const handleBarCodeRead = useCallback(
    async ({ data }: BarCodeReadEvent) => {
      const dataMatch = data.match(MATCHING_REGEX);
      if (!dataMatch) {
        setError(true);
      } else {
        const movie_id = dataMatch[1];
        const category = dataMatch[2];
        // setLoading(true);
        let movieDetail: any;
        if (category === Category.Movie) {
          movieDetail = await movieDB.get<MovieDBMoviesResponse>(
            `/movie/${movie_id}`,
          );
        } else {
          movieDetail = await movieDB.get<MovieDBMoviesResponse>(
            `/tv/${movie_id}`,
          );
        }

        // setLoading(false);
        navigation.navigate('DetailScreen', {
          movie: movieDetail.data,
          category: category,
        });
      }
    },
    [navigation, MATCHING_REGEX],
  );

  const handleOnFlashPress = useCallback(() => {
    setFlash(
      flash === RNCamera.Constants.FlashMode.off
        ? RNCamera.Constants.FlashMode.torch
        : RNCamera.Constants.FlashMode.off,
    );
  }, [flash]);

  if (!isFocused) return null;

  return (
    <SafeAreaView style={styles.constainer}>
      <StatusBar hidden={true} />
      <RNCamera
        style={styles.camera}
        flashMode={flash}
        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
        onBarCodeRead={throttle(1000, true, handleBarCodeRead)}
        captureAudio={false}
      >
        <View style={styles.captionContainer}>
          <View
            style={[
              styles.wrapperMessage,
              { backgroundColor: error ? '#EB5757' : '#EDEDED' },
            ]}
          >
            <Text>
              {error
                ? 'Código QR no válido.'
                : 'Coloque el código QR dentro del marco.'}
            </Text>
          </View>
          <TouchableOpacity
            onPress={handleOnFlashPress}
            style={styles.floatingButton}
          >
            <Icon
              color="black"
              name={flash ? 'flash-outline' : 'flash-off-outline'}
              size={45}
            />
          </TouchableOpacity>
        </View>
      </RNCamera>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    borderRadius: 15,
    margin: 15,
    overflow: 'hidden',
  },
  captionContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperMessage: {
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 23,
    marginTop: 15,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
  },
  floatingButton: {
    elevation: 9,
    backgroundColor: 'white',
    borderRadius: 30,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
