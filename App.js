import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import BottomNav from './BottomNav';

export default function App() {
  return (
    <PaperProvider>
        <BottomNav/>
    </PaperProvider>
  );
}
