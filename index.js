/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Home from './src/home';
import Login from './src/login';
import People from './src/people';
import Lifecycle from './src/lifecycle';
import Networking from './src/networking';
import Networking2 from './src/networking-2';
import src from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => src);
