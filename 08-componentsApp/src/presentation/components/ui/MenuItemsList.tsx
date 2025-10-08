import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { IoniconsIconName } from '@react-native-vector-icons/ionicons';

import { MenuItem } from './MenuItem';
import { Separator } from './Separator';
import { ThemeContext } from '../../context/ThemeContext';
import { Title } from './Title';

interface MenuItemsListProps {
  title?: string;
  items: { name: string; icon: IoniconsIconName; component: string }[];
}

export const MenuItemsList = (props: MenuItemsListProps) => {
  const { title, items } = props;

  const { colors } = useContext(ThemeContext);

  return (
    <>
      {title && <Title text={title} />}
      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <View
            key={item.component}
            style={{
              backgroundColor: colors.cardBackground,
            }}
          >
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
});
