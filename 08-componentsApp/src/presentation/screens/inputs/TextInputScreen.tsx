import React, { useState } from 'react';

import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Card } from '../../components/ui/Card';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';
import { globalStyles } from '../../../config/theme/theme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView>
        <CustomView isHorizontallyPadded isVerticallyPadded>
          <Title text="TextInputScreen" safe />
          <Card style={{ gap: 16 }}>
            <TextInput
              style={globalStyles.input}
              placeholder="Full name"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, name: value })}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({ ...form, email: value })}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>
          <Card style={{ marginTop: 16, height: 800 }}>
            <Text>{JSON.stringify(form, null, 4)}</Text>
          </Card>
          <Card style={{ marginTop: 16 }}>
            <TextInput
              style={globalStyles.input}
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>
        </CustomView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
