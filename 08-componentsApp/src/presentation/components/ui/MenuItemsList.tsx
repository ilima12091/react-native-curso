import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IoniconsIconName } from '@react-native-vector-icons/ionicons';

import { MenuItem } from './MenuItem';
import { colors } from '../../../config/theme/theme';
import { Separator } from './Separator';

interface MenuItemsListProps {
  title?: string;
  items: { name: string; icon: IoniconsIconName; component: string }[];
}

export const MenuItemsList = (props: MenuItemsListProps) => {
  const { title, items } = props;

  return (
    <>
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <View key={item.component} style={styles.itemContainer}>
            <MenuItem
              name={item.name}
              icon={item.icon}
              component={item.component}
            />
            {index < items.length - 1 && <Separator />}
          </View>
        ))}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  itemsContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    fontSize: 22,
    color: colors.text,
    marginBottom: 4,
  },
  itemContainer: {
    backgroundColor: colors.cardBackground,
  },
});
