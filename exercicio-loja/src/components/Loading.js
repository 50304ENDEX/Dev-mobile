// components/Loading.js
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useTheme } from 'react-native-paper';

const Loading = () => {
  const { colors } = useTheme();
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loading;