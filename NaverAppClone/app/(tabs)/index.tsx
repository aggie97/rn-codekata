import {router} from 'expo-router';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({
  safeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <WebView
        source={{uri: 'https://m.naver.com'}}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        onShouldStartLoadWithRequest={request => {
          console.log('Home - Request', request);
          if (
            request.url.startsWith('https://m.naver.com') ||
            request.mainDocumentURL?.startsWith('https://m.naver.com')
          ) {
            return true;
          }

          if (request.url != null && request.url.startsWith('https://')) {
            router.navigate({pathname: 'browser'});
            return false;
          }
          return true;
        }}
      />
    </SafeAreaView>
  );
}
