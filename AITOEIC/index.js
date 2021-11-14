/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import Providers from './navigation';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Providers);