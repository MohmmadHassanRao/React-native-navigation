import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Navigation from './src/config/Navigation';
import AppRouter from './src/config/Navigation';
import Navigator from './src/config/Navigation';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
// function Details({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Details</Text>
//       <Button title="go" onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

const Stack = createStackNavigator();

function App() {
  return (
    // <>
    //   <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Login" component={Login} />
    //       <Stack.Screen name="Signup" component={Signup} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </>
    <>
      <AppRouter />
      <View style={styles.header}>
        <Text>Hello World</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
