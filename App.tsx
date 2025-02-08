import 'react-native-gesture-handler';
import 'react-native-reanimated';
import React from 'react';
import Router from './src/navigation/Router';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}

export default App;
