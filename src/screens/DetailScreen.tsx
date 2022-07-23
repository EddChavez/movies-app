import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';
import { MovieDetails } from '../components/MovieDetails';
import QRModal from '../components/QRModal';
import { CloseButton } from '../components/CloseButton';
import { PosterDetail } from '../components/PosterDetail';
import { MovieDescription } from '../components/MovieDescription';
import { useGetShowDetails } from '../hooks/useGetShowDetails';
import { useGetCastShow } from '../hooks/useGetCastShow';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ route }: Props) => {
  const { movie, category } = route.params;
  const [showShareOpt, setshowShareOpt] = useState(false);
  const { isLoadingDetail, detailShow } = useGetShowDetails({
    category,
    id: movie.id,
  });
  const { cast, isLoadingCast } = useGetCastShow({ category, id: movie.id });

  const qrValue = `movie_id:${movie.id};category:${category}`;

  const shareOptHandler = () => {
    setshowShareOpt(!showShareOpt);
  };

  return (
    <ScrollView>
      <PosterDetail posterPath={movie?.poster_path} />
      <MovieDescription {...{ movie, shareOptHandler }} />
      <MovieDetails
        movieFull={detailShow!}
        cast={cast}
        isLoadingDetail={isLoadingDetail}
        isLoadingCast={isLoadingCast}
      />

      {/* Boton para cerrar */}
      <CloseButton />
      <QRModal
        isVisible={showShareOpt}
        modalHandler={shareOptHandler}
        qrValue={qrValue}
      />
    </ScrollView>
  );
};
