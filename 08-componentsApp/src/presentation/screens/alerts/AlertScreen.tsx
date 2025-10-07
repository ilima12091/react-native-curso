import React from 'react';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';
import { globalStyles } from '../../../config/theme/theme';
import { Alert } from 'react-native';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const showPrompt = () => {
    Alert.prompt('Enter your email', 'This is the prompt message', value =>
      console.log('You entered: ' + value),
    );
  };

  return (
    <CustomView style={[globalStyles.globalMargin, { gap: 16 }]}>
      <Title text="Alerts" safe />
      <Button text="Alert with 2 buttons" onPress={createTwoButtonAlert} />
      <Button text="Alert with 3 buttons" onPress={createThreeButtonAlert} />
      <Title text="IOS only" />
      <Button text="Prompt alert" onPress={showPrompt} />
    </CustomView>
  );
};
