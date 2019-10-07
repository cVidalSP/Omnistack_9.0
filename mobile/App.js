import React from 'react';
import Routes from './src/routes';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return <Routes />
}
