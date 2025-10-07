import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons, {
  IoniconsIconName,
} from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../../../config/theme/theme';

interface MenuItemProps {
  name: string;
  icon: IoniconsIconName;
  component: string;
}

export const MenuItem = (props: MenuItemProps) => {
  const { name, icon, component } = props;
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate(component);
  };

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <Ionicons name={icon} size={25} color={colors.primary} />
        <Text style={styles.text}>{name}</Text>
        <Ionicons
          name="chevron-forward-outline"
          size={25}
          style={styles.chevron}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.cardBackground,
  },
  text: {
    color: colors.text,
    marginLeft: 10,
  },
  chevron: {
    marginLeft: 'auto',
    color: colors.primary,
  },
});
