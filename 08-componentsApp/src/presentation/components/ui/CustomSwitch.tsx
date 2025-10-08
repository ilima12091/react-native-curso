import React, { useContext } from 'react';
import { Platform, StyleSheet, Switch, Text, View } from 'react-native';

import { ThemeContext } from '../../context/ThemeContext';

interface CustomSwitchProps {
  isOn: boolean;
  onChange: (value: boolean) => void;
  text?: string;
}

export const CustomSwitch = (props: CustomSwitchProps) => {
  const { isOn, onChange, text } = props;

  const { colors } = useContext(ThemeContext);

  return (
    <View style={styles.switchRow}>
      {text && (
        <Text
          style={{
            color: colors.text,
          }}
        >
          {text}
        </Text>
      )}
      <Switch
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={isOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
});
