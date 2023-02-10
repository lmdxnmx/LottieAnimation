import React from 'react';
import {View, StyleSheet} from 'react-native';

import Lottie from 'lottie-react-native';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Lottie source={require('./animation/typing.json')} autoPlay loop />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {height: '100%'},
});
export default App;
