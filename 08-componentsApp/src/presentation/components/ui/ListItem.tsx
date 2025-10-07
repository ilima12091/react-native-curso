import React from 'react';
import { StyleSheet } from 'react-native';
import { FadeInImage } from './FadeInImage';

interface ListItemProps {
  text: string;
}

export const ListItem = (props: ListItemProps) => {
  const { text } = props;

  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${text}/500/400`}
      style={styles.item}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 300,
  },
});
