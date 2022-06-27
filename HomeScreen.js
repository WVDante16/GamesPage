import React from 'react';
import {View, Text, Button, Image} from 'react-native';
import Styles from './Styles';

function HomeScreen({navigation}) {
    return (
        <View style={Styles.container}>
            <Image source={require('./assets/CrazyGames.png')} resizeMode="contain" style={Styles.image} />
            <Text style={Styles.text}>Tremenda aplicacion de juegos que me estoy armando.</Text>
            <Text style={Styles.textDescription}>Aplicacion de una galeria de juegos simples para dispositivos moviles.</Text>
            <Text style={Styles.textDescription}>UwU</Text>

            <Button
                title="Ver Los Juegos"
                color="#ae52d4"
                onPress={() => navigation.navigate('Games')}
            />
        </View>
    )
}

export default HomeScreen;