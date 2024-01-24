import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductContainer from './Screens/Product/ProductContainer';
import Header from './Shared/Header';
import { NavigationContainer } from '@react-navigation/native'
import Main from './Navigators/Main'
export default function App() {
  return (
    <NavigationContainer>
     
        <Header />
        <ProductContainer />
        <Main />
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
