import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Signup</Text>
      <Button title="signup" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Signup;
