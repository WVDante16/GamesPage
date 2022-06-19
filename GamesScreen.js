import React from 'react';
import {View, StyleSheet, ScrollView, Image, Text, Button} from 'react-native';

function GamesScreen({navigation}) {
    return (
        <View style={styles.root}>
            <ScrollView>
                <Image 
                    source={require('./assets/GuessTheNumber.png')} resizeMode="stretch" style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>Guess My Number</Text>
                    <Text style={styles.text}>Encuentra el numero</Text>
                    <Button 
                        color="#ae52d4"
                        title="Jugar"
                        onPress={() => navigation.navigate('Guess My Number')}
                    />
                </View>

                <Image source={require('./assets/RockPaperScissors.png')} resizeMode="stretch" style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>Rock Paper Scissors</Text>
                    <Text style={styles.text}>Resolver disputas</Text>
                    <Button 
                        color="#ae52d4"
                        title="Jugar"
                        onPress={() => navigation.navigate('Piedra Papel O Tijeras')}
                    />
                </View>

                <Image source={require('./assets/YPerry.png')} resizeMode="stretch" style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>Y Perry?</Text>
                    <Text style={styles.text}>Encontrar a Perry el Ornitorrinco</Text>
                    <Button 
                        color="#ae52d4"
                        title="Jugar"
                        onPress={() => navigation.navigate('Y Perry?')}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#9e9e9e',
    },

    containerBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },

    margin: {
        marginBottom: 50
    },

    image: {
        width: '100%',
        height: 180,
        justifyContent: "center",
        borderRadius: 3,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        marginBottom: 0,
    },

    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 15,
        marginBottom: 40,
    },

    title: {
        fontSize: 16,
        fontWeight: "bold",
    },

    text: {
        fontSize: 12,
        marginBottom: 8,
    }
})

export default GamesScreen;