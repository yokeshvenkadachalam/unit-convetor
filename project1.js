import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [value, setValue] = useState('');
  const [fromUnit, setFromUnit] = useState('Kilogram');
  const [toUnit, setToUnit] = useState('Ounce');
  const [result, setResult] = useState('');

  const convert = () => {
    const input = parseFloat(value);
    if (isNaN(input)) {
      setResult('Invalid input');
      return;
    }

    let output = input;

    if (fromUnit === 'Kilogram' && toUnit === 'Ounce') {
      output = input * 35.274;
    } else if (fromUnit === 'Ounce' && toUnit === 'Kilogram') {
      output = input / 35.274;
    } else {
      output = input;
    }

    setResult(`${output.toFixed(2)} ${toUnit}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Unit Converter</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter value"
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />

      <Text style={styles.label}>From:</Text>
      <Picker
        selectedValue={fromUnit}
        onValueChange={setFromUnit}
        style={styles.picker}
      >
        <Picker.Item label="Kilogram" value="Kilogram" />
        <Picker.Item label="Ounce" value="Ounce" />
      </Picker>

      <Text style={styles.label}>To:</Text>
      <Picker
        selectedValue={toUnit}
        onValueChange={setToUnit}
        style={styles.picker}
      >
        <Picker.Item label="Ounce" value="Ounce" />
        <Picker.Item label="Kilogram" value="Kilogram" />
      </Picker>

      <Button title="Convert" onPress={convert} />

      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    height: Platform.OS === 'ios' ? 180 : 50,
    width: '100%',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',
    textAlign: 'center',
  },
});

