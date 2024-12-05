import {View, Text, StyleSheet} from 'react-native';

export default function BrowserScreen() {
  return (
    <View style={styles.container}>
      <Text>Browser Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
