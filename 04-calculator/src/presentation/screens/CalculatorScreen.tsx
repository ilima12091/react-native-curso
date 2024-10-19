import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, globalStyles} from '../../config/theme/app-theme';
import {CalculatorButton} from '../components/CalculatorButton';

export const CalculatorScreen = () => {
  const handleButtonPress = (value: string) => {
    console.log('Button pressed: ', value);
  };

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={styles.resultsContainer}>
        <Text style={globalStyles.mainResult}>1500</Text>
        <Text style={globalStyles.subResult}>15</Text>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => handleButtonPress('C')}
          label="C"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={() => handleButtonPress('+/-')}
          label="+/-"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={() => handleButtonPress('del')}
          label="del"
          color={colors.lightGray}
          blackText
        />
        <CalculatorButton
          onPress={() => handleButtonPress('/')}
          label="/"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => handleButtonPress('7')}
          label="7"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => handleButtonPress('8')}
          label="8"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => handleButtonPress('9')}
          label="9"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => handleButtonPress('x')}
          label="x"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => handleButtonPress('4')}
          label="4"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => handleButtonPress('5')}
          label="5"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => handleButtonPress('6')}
          label="6"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => handleButtonPress('-')}
          label="-"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => handleButtonPress('1')}
          label="1"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => handleButtonPress('2')}
          label="2"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => handleButtonPress('3')}
          label="3"
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => handleButtonPress('+')}
          label="+"
          color={colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => handleButtonPress('0')}
          label="0"
          color={colors.darkGray}
          doubleSize
        />
        <CalculatorButton
          onPress={() => handleButtonPress('.')}
          label="."
          color={colors.darkGray}
        />
        <CalculatorButton
          onPress={() => handleButtonPress('=')}
          label="="
          color={colors.orange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  resultsContainer: {
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
});
