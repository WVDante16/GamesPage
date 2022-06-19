import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text, Button} from 'react-native';
import Styles from '../Styles';

const elecciones = ["piedra", "papel", "tijeras"];

function RockPaperScissors() {
    const [seleccion, setSelected] = useState("");
    const [seleccionComputadora, setConputadoraSeleccion] = useState("");
    const [playerCount, setPlayerCount] = useState(0);
    const [computerCount, setComputerCount] = useState(0);
    
    const play = () => {
        if (!seleccion) {
            return;
        }
        else {
            const computadoraSeleccionRandom = Math.floor(Math.random() * elecciones.length);
            setConputadoraSeleccion(elecciones[computadoraSeleccionRandom]);
            
            
            if (seleccionComputadora === seleccion) {
                return alert("Empate!")
            } 
            else {
                if (
                    (seleccionComputadora === "piedra" && seleccion === "tijeras") ||
                    (seleccionComputadora === "papel" && seleccion === "piedra") ||
                    (seleccionComputadora === "tijeras" && seleccion === "papel")
                ) {
                    setComputerCount(computerCount + 1);

                    if (computerCount === 4) {
                        return alert("PERDISTE! LA COMPUTADORA GANA UnU")
                    }
                    else {
                        return alert("Perdiste! La computadora gana.")
                    }
                }
                else {
                    setPlayerCount(playerCount + 1);
                        
                    if (playerCount === 4) {
                        return alert("GANASTE! VICTORIA ROYAL! UwU")
                    }
                    else {
                        return alert("Ganaste!")
                    }

                }
            } 
            
        }
    };

    return (
        <View style={Styles.container}>
            <Text style={styles.title}>Escoge tu jugada</Text>
            
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => {setSelected("piedra")}}>
                    <Image source={require('../assets/Rock.jpg')} resizeMode="stretch" style={styles.image} />
                    <Text style={styles.boxText}>Rock</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button} onPress={() => {setSelected("papel")}}>
                    <Image source={require('../assets/Paper.jpg')} resizeMode="stretch" style={styles.image} />
                    <Text style={styles.boxText}>Paper</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button} onPress={() => {setSelected("tijeras")}}>
                    <Image source={require('../assets/Scissors.png')} resizeMode="stretch" style={styles.image} />
                    <Text style={styles.boxText}>Scissors</Text>
                </TouchableOpacity>
            </View>

            <Button 
                color="#ae52d4"
                title="Jugar"
                onPress={play}
            />

            <Text style={styles.puntaje}>Puntaje</Text>
            <Text style={styles.marcador}>Jugador: {playerCount}</Text>
            <Text style={styles.marcador}>VS</Text>
            <Text style={styles.marcador}>Computadora: {computerCount}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#9e9e9e'
    },
    
    button: {
        backgroundColor: '#5e35b1',
        borderRadius: 20,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#303838',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        alignItems: 'center',
    },

    image: {
        width: 100,
        height: 100,
        justifyContent: "center",
        borderRadius: 3,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        marginBottom: 10,
        padding: 10,
    },

    title: {
        color: '#512da8',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10,
    },

    boxText: {
        color: '#b39ddb',
        fontWeight: 'bold',
        fontSize: 20,
    },

    puntaje: {
        color: '#512da8',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 20,
    },

    marcador: {
        fontWeight: 'bold',
        fontSize: 20,
    }
})

export default RockPaperScissors;