import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

export const Layout: React.FC = ({ children }) => {
  const { top } = useSafeAreaInsets();

  return (
    <ScrollView>
      <View style={containerStyle({ top })}>{children}</View>
    </ScrollView>
  );
};

const containerStyle = ({ top }: { top: EdgeInsets['top'] }) =>
  StyleSheet.create({
    style: {
      marginTop: top + 20,
      marginBottom: 20,
    },
  }).style;
