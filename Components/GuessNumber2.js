import React, {useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Styles from '../Styles';

function generateRandomNumber(max, min = 1) {
    return Math.floor(Math.random()*(max - min) + min);
}

function GuessNumber2(props) {
    const [random, setRandom] = useState('');
    const [count, setCount] = useState(0);
    const [win, setWin] = useState(false);
    const [play, setPlay] = useState(false);

    const soClose1 = () => {
        setPlay(true);
        setRandom(generateRandomNumber(random + 5, random));
        setCount(count + 1);
    }

    const soClose2 = () => {
        setPlay(true);
        setRandom(generateRandomNumber(random, random - 5));
        setCount(count + 1);
    }

    const soFar1 = () => {
        setPlay(true);
        setRandom(generateRandomNumber(100, random + 10));
        setCount(count + 1);
    }

    const soFar2 = () => {
        setPlay(true);
        setRandom(generateRandomNumber(random - 10, 1));
        setCount(count + 1);
    }

    const victory = () => {
        setWin(true);
    }

    return (
        <View style={Styles.container}>
            <Text style={styles.principal}>Piensa en tu numero!</Text>
            <Text style={styles.description}>La computadora intentara adivinarlo.</Text>
            {
                play? 
                    <Text style={styles.number}>{random}</Text>
                :
                    <Text style={styles.number}>0</Text>
            }

            <Pressable style={styles.button} onPress ={soClose1}>
                <Text style={styles.buttonText}>Muy cerca! Un poco mas alto.</Text>
            </Pressable>

            <Pressable style={styles.button} onPress ={soClose2}>
                <Text style={styles.buttonText}>Muy cerca! Un poco mas bajo.</Text>
            </Pressable>

            <Pressable style={styles.button} onPress ={soFar1}>
                <Text style={styles.buttonText}>Lejos! Mas alto.</Text>
            </Pressable>

            <Pressable style={styles.button} onPress ={soFar2}>
                <Text style={styles.buttonText}>Lejos! Mas bajo.</Text>
            </Pressable>

            <Pressable style={styles.button} onPress ={victory}>
                <Text style={styles.buttonText}>Acerto!</Text>
            </Pressable>

            {
                win?
                    <Text style={styles.win}>
                        La computadora lo adivino en {count} intentos.
                    </Text>
                :
                    <Text>
                        
                    </Text>
            }
        </View>
    );
}

export default GuessNumber2;

const styles = StyleSheet.create({
    principal: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5c007a',
        marginTop: 10,
    },

    description: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5c007a',
        marginTop: 5,
        marginBottom: 25,
    }, 

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#ae52d4',
        marginBottom: 10,
    },

    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#5c007a',
        marginTop: 5,
        marginBottom: 5,
    },

    number: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#5c007a',
        marginBottom: 10,
    },

    win: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#8e24aa',
    },
})