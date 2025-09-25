import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {RootStackParamList} from '../../routes/StackNavigator';

const products = [
  {
    id: 1,
    name: 'Product 1',
  },
  {
    id: 2,
    name: 'Product 2',
  },
  {
    id: 3,
    name: 'Product 3',
  },
  {
    id: 4,
    name: 'Product 4',
  },
  {
    id: 5,
    name: 'Product 5',
  },
  {
    id: 6,
    name: 'Product 6',
  },
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={globalStyles.container}>
      <Text
        style={{
          fontSize: 30,
        }}>
        Productos
      </Text>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            label={item.name}
            onPress={() =>
              navigation.navigate('Product', {
                id: item.id,
                name: item.name,
              })
            }
          />
        )}
      />
      <Text
        style={{
          fontSize: 30,
        }}>
        Ajustes
      </Text>
      <PrimaryButton
        label="Ajustes"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};
