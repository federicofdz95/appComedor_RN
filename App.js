import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import BottomNav from './BottomNav';
import './App.css'

export default function App() {
  return (
    <PaperProvider>
        <BottomNav/>
    </PaperProvider>
  );
}
