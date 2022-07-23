import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/Navigation';
import { useActorDetail } from '../hooks/cast';
import { ScrollView } from 'react-native-gesture-handler';
import { CloseButton } from '../components/CloseButton';
import { PosterDetail } from '../components/PosterDetail';
import { ActorDetails } from '../components/ActorDetails';

interface Props
  extends StackScreenProps<RootStackParams, 'ActorDetailScreen'> {}

export const ActorScreen = ({ route }: Props) => {
  const { actorId } = route.params;
  const { actor } = useActorDetail(actorId);

  return (
    <ScrollView>
      <PosterDetail posterPath={actor?.profile_path} />
      <ActorDetails {...{ actor }} />
      <CloseButton />
    </ScrollView>
  );
};
