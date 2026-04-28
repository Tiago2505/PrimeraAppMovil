import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Primera aplicacion</Text>
      <Text>By: Dany Paz</Text>
      <StatusBar style="auto" />

      <CustomButton title='Prueba' onPressButton={()=>console.log('prueba')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9191',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
