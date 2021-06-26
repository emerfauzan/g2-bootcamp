/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/home';
import Login from './src/login';
import People from './src/people';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => People);
