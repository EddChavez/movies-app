import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  value: string;
  onChangeText: (value: string) => void;
}

export const SearchBar = ({ value, onChangeText }: Props) => {
  return (
    <View style={styles.searchBar}>
      <Icon name="search" size={24} color="black" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder="Buscar una película o programa de televisión"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    position: 'absolute',
    opacity: 0.85,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 7.5,
    margin: 15,
    elevation: 9,
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    marginLeft: 5,
  },
});
