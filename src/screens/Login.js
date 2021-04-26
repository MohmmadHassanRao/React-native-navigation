import {useNavigation} from '@react-navigation/core';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Login</Text>
      <Button title="signup" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Login;
