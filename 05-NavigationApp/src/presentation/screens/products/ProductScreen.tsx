import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import {RootStackParamList} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

export const ProductScreen = () => {
  const {params} = useRoute<RouteProp<RootStackParamList, 'Product'>>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params.name]);

  return (
    <View style={globalStyles.container}>
      <Text>Product screen</Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
