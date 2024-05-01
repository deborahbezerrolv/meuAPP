import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/Components/Title';
import Form from './src/Components/Form';
import Resultado from './src/Components/Form/Resultado';

export default function App() {
  return (
    <View style={styles.container}>
      <Title title="Meu Primeiro Formulário"></Title>
      <Form></Form>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
