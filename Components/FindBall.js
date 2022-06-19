import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Button} from 'react-native';
import Styles from '../Styles';

const elecciones = ["patio", "sala", "doofenshmirtz", "bosque", "mar", "espacio"]

function FindBall() {
    const [seleccion, setSelected] = useState("");
    const [seleccionComputadora, setConputadoraSeleccion] = useState("");
    const [win, setWin] = useState(false);

    const play = () => {
        if (!seleccion) {
            return;
        }
        else {
            const computadoraSeleccionRandom = Math.floor(Math.random() * elecciones.length);
            setConputadoraSeleccion(elecciones[computadoraSeleccionRandom]);
            
            if (seleccionComputadora === seleccion) {
                setWin(true);
                return alert("Encontraste a Perry!")
            } 
            else {
                return alert("No encontraste a Perry UnU")
            }
        }        
    };
    

    return (
        <View style={Styles.container}>
            <Text style={styles.title}>Encuentra A Perry!</Text>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => {setSelected("patio")}}>
                    <Image source={require('../assets/Patio.png')} resizeMode="stretch" style={styles.image} />
                    <Text style={styles.boxText}>Patio</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button} onPress={() => {setSelected("sala")}}>
                    <Image source={require('../assets/Sala.jpg')} resizeMode="stretch" style={styles.image} />
                    <Text style={styles.boxText}>Sala</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button} onPress={() => {setSelected("doofenshmirtz")}}>
                    <Image source={require('../assets/Doofenshmirtz.jpg')} resizeMode="stretch" style={styles.image} />
                    <Text style={styles.boxText}>Edificio</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => {setSelected("bosque")}}>
                    <Image source={require('../assets/Bosque.jpg')} resizeMode="stretch" style={styles.image} />
                    <Text style={styles.boxText}>Bosque</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button} onPress={() => {setSelected("mar")}}>
                    <Image source={require('../assets/Mar.webp')} resizeMode="stretch" style={styles.image} />
                    <Text style={styles.boxText}>Mar</Text>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.button} onPress={() => {setSelected("espacio")}}>
                    <Image source={require('../assets/Espacio.jpg')} resizeMode="stretch" style={styles.image} />
                    <Text style={styles.boxText}>Espacio</Text>
                </TouchableOpacity>
            </View>

            <Button 
                color="#ae52d4"
                title="Buscar"
                onPress={play}
            />

            {
                win?
                    <Image source={require('../assets/Perry.jpg')} resizeMode="stretch" style={styles.perry} />
                :
                    <Text style={styles.text}>Donde estara Perry?</Text>
            }

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

    text: {
        color: '#790e8b',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 10,
    },

    perry: {
        width: '100%',
        height: 180,
        justifyContent: "center",
        borderRadius: 3,
        marginTop: 20,
    },
})

export default FindBall;