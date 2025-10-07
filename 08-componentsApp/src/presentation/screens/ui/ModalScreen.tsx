import React, { useState } from 'react';

import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Modal, StyleSheet, View } from 'react-native';
import { Button } from '../../components/ui/Button';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CustomView isHorizontallyPadded>
      <Title text="Modal" safe />
      <Button text="Open modal" onPress={() => setIsVisible(true)} />
      <Modal visible={isVisible} animationType="fade">
        <View style={styles.modalBackgroundContainer}>
          <View style={styles.modalContentContainer}>
            <Title text="Modal content" safe />
          </View>
          <View style={styles.modalBottomContainer}>
            <Button
              text="Close"
              onPress={() => setIsVisible(false)}
              style={styles.closeButton}
            />
          </View>
        </View>
      </Modal>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  modalBackgroundContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  modalContentContainer: {
    padding: 10,
  },
  modalBottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  closeButton: {
    height: 40,
    borderRadius: 0,
  },
});
