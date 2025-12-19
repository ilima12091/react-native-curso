import React from 'react';
import Ionicons, {
  IoniconsIconName,
} from '@react-native-vector-icons/ionicons';

export type IconProps = {
  name: IoniconsIconName;
  size?: number;
  color?: string;
  className?: string;
};

export const Icon = (props: IconProps) => {
  const { name, size = 24, color = 'black', className = '' } = props;

  return (
    <Ionicons name={name} size={size} color={color} className={className} />
  );
};
