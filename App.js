import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './HomeScreen';
import GamesScreen from './GamesScreen';
import GuessNumber0 from './Components/GuessNumber0';
import GuessNumber1 from './Components/GuessNumber1';
import GuessNumber2 from './Components/GuessNumber2';
import RockPaperScissors from './Components/RockPaperScissors';
import FindBall from './Components/FindBall';

const Drawer = createDrawerNavigator(); 
const Stack = createNativeStackNavigator();

function Root() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Games" component={GamesScreen} />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Root" component={Root} options={{headerShown: false}} />
                <Stack.Screen name="Guess My Number" component={GuessNumber0} />
                <Stack.Screen name="Usuario Adivina" component={GuessNumber1} />
                <Stack.Screen name="Computadora Adivina" component={GuessNumber2} />
                <Stack.Screen name="Piedra Papel O Tijeras" component={RockPaperScissors} />
                <Stack.Screen name="Y Perry?" component={FindBall} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}