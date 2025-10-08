import React, { useContext } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons, {
  IoniconsIconName,
} from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from '../../context/ThemeContext';

interface MenuItemProps {
  name: string;
  icon: IoniconsIconName;
  component: string;
}

export const MenuItem = (props: MenuItemProps) => {
  const { name, icon, component } = props;
  const navigation = useNavigation<any>();
  const { colors } = useContext(ThemeContext);

  const handlePress = () => {
    navigation.navigate(component);
  };

  return (
    <Pressable onPress={handlePress}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: colors.cardBackground,
          },
        ]}
      >
        <Ionicons name={icon} size={25} color={colors.primary} />
        <Text
          style={[
            styles.text,
            {
              color: colors.text,
            },
          ]}
        >
          {name}
        </Text>
        <Ionicons
          name="chevron-forward-outline"
          size={25}
          style={[
            styles.chevron,
            {
              color: colors.primary,
            },
          ]}
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
  },
  text: {
    marginLeft: 10,
  },
  chevron: {
    marginLeft: 'auto',
  },
});
