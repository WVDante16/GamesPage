import React, {useState} from 'react';
import {StyleSheet, View, Button, TextInput, Text} from 'react-native';
import List from './List';
import Styles from '../Styles';

function mapItems(items) {
    return items.map((value, i) => ({key:i.toString(), value}));
}

function generateRandomNumber(max, min = 1) {
    return Math.floor(Math.random()*(max - min) + min);
}

function calculateText(number, random) {
    const soClose = 5;
    const diff = Math.abs(random - number);

    if (diff < soClose) {
        if (number < random) {
            return "Estas muy cerca! Tu numero es un poco bajo.";
        }
        else {
            return "Estas muy cerca! Tu numero es un poco alto.";
        }
    }  
    else {
        if (number < random) {
            return "Tu numero es muy bajo!";
        }
        else {
            return "Tu numero es muy alto!";
        }
    }
}

const random = generateRandomNumber(100);

function GuessNumber1(props) {
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [guessList, setGuessList] = useState([]);
    const [win, setWin] = useState(false);
    const [count, setCount] = useState(0);
    
    const handleOnChange = (newNumber) => {
        setNumber(newNumber);
    }

    const handleOnPress = () => {
        const num = parseInt(number);
        const numRand = parseInt(random);
        const text = calculateText(num, numRand);

        if (num === numRand) {
            setWin(true);
        }

        setNumber("");
        setMessage(text);
        setGuessList([
            num,
            ...guessList
        ]);

        setCount(count +1);
    }

    return (
        <View style={Styles.container}>
            <TextInput
                style={styles.input}
                autoFocus
                placeholder = "Guess My Number"
                onChangeText = {handleOnChange}
                defaultValue = {number}
            />

            <Button 
                title = "Probar"
                color="#ae52d4"
                onPress = {handleOnPress}
            />

            {
                win?
                    <Text style={styles.win}>
                        Felicidades! Lo adivinaste en {count} intentos.
                    </Text>
                :
                    <Text style={styles.message}>
                        {message}
                    </Text>
            }

            <List data = {mapItems(guessList)} />
        </View>
    );
}

export default GuessNumber1;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#9e9e9e',
    },
    
    input: {
        width: 200,
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5c007a',
        marginTop: 40,
    },

    message: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#8e24aa',
    },

    win: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#8e24aa',
    },
})