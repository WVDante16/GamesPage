import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import Styles from '../Styles';

function GuessNumber0({navigation}) {
    return (
        <View style={Styles.container}>
            <Image source={require('../assets/GuessTheNumber.png')} resizeMode="stretch" style={styles.image} />
            <Text style={styles.text}>Selecciona El Modo De Juego.</Text>
            
            <Text style={styles.description}>Adivina el numero de la computadora.</Text> 
            <Button
                title="Jugar"
                color="#ae52d4"
                onPress={() => navigation.navigate('Usuario Adivina')}
            />

            <Text style={styles.description}>Que la computadora adivine tu numero.</Text>
            <Button
                title="Jugar"
                color="#ae52d4"
                onPress={() => navigation.navigate('Computadora Adivina')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#9e9e9e',
    },

    image: {
        width: '100%',
        height: 180,
        justifyContent: "center",
        borderRadius: 3,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        marginBottom: 25,
        padding: 100,
    },

    text: {
        alignSelf: 'flex-start',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        marginLeft: 5,
        color: '#5c007a',
    },

    description: {
        fontSize: 20,
        padding: 5,
    },
})

export default GuessNumber0;