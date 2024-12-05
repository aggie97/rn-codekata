import {router} from 'expo-router';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function ShoppingScreen() {
  return (
    <View style={styles.container}>
      <Text>Shopping</Text>
      <Button
        onPress={() => router.navigate({pathname: 'browser'})}
        title="Go to Browser"
      />
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
