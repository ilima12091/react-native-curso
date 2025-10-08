import React, { useContext, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
} from 'react-native';

import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Card } from '../../components/ui/Card';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

export const TextInputScreen = () => {
  const { colors } = useContext(ThemeContext);
  console.log(colors);
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
              style={[
                globalStyles.input,
                {
                  color: colors.text,
                  borderColor: colors.text,
                },
              ]}
              placeholder="Full name"
              placeholderTextColor={colors.text}
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, name: value })}
            />
            <TextInput
              style={[
                globalStyles.input,
                { color: colors.text, borderColor: colors.text },
              ]}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor={colors.text}
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({ ...form, email: value })}
            />
            <TextInput
              style={[
                globalStyles.input,
                { color: colors.text, borderColor: colors.text },
              ]}
              placeholder="Phone"
              keyboardType="phone-pad"
              placeholderTextColor={colors.text}
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>
          <Card style={{ marginTop: 16, height: 800 }}>
            <Text style={{ color: colors.text }}>
              {JSON.stringify(form, null, 4)}
            </Text>
          </Card>
          <Card style={{ marginTop: 16 }}>
            <TextInput
              style={[
                globalStyles.input,
                { color: colors.text, borderColor: colors.text },
              ]}
              placeholder="Phone"
              keyboardType="phone-pad"
              placeholderTextColor={colors.text}
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>
        </CustomView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
