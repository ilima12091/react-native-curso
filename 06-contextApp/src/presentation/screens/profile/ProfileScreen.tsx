import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from '../../../config/app-theme';
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);

  const handleChangeName = () => {
    useProfileStore.setState({ name: 'Manolo' });
  };

  const handleChangeEmail = () => {
    useProfileStore.setState({ email: 'manolo@example.com' });
  };

  const handleRevertChanges = () => {
    changeProfile('Ricardo', 'ricardo@example.com');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Name: {name}</Text>
      <Text style={styles.title}>Email: {email}</Text>
      <Pressable style={styles.primaryButton} onPress={handleChangeName}>
        <Text>Change name</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={handleChangeEmail}>
        <Text>Change email</Text>
      </Pressable>
      <Pressable style={styles.primaryButton} onPress={handleRevertChanges}>
        <Text>Revert changes</Text>
      </Pressable>
    </View>
  );
};
