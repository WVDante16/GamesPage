import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './HomeScreen';
import GamesScreen from './GamesScreen';
import Game from './Game';

const Drawer = createDrawerNavigator(); 

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Games" component={GamesScreen} />
                <Drawer.Screen name="Game" component={Game} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}