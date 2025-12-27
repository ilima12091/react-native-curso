import React from 'react';
import { Button } from '../forms';
import Ionicons, {
  IoniconsIconName,
} from '@react-native-vector-icons/ionicons';

interface FABProps {
  iconName?: IoniconsIconName;
  onPress?: () => void;
}

export const FAB = (props: FABProps) => {
  const { iconName = 'add', onPress } = props;

  return (
    <Button variant="fab" label="" onPress={onPress}>
      <Ionicons name={iconName} size={30} color="white" />
    </Button>
  );
};
