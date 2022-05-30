import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Box from './Box';

const games = [
    {id: 1, name: "Guess My Number", description: "Encuentra el numero", image: "https://img.freepik.com/vector-gratis/vector-tipografia-estilo-basura-trazo-pincel-signo-interrogacion_53876-140880.jpg?w=2000"},
    {id: 2, name: "RockPaperScissors", description: "Resolver disputas", image: "https://www.contramuro.com/wp-content/uploads/2017/05/piedra-papel-o-tijera.jpg"},
    {id: 3, name: "No se que hare pero estoy muy nervioso", description: "Juego funky", image: "https://www.elheraldodetabasco.com.mx/doble-via/virales/m4h1ee-meme1.png/ALTERNATES/LANDSCAPE_1140/meme1.png"},
]

function GamesScreen({}) {
    return (
        <View style={styles.root}>
            <ScrollView>
                <View style = {styles.containerBox}>
                    {
                        games.map((game, i) => (
                            <Box
                                key = {i}
                                id = {game.id}
                                name = {game.name}
                                description = {game.description}
                                image = {game.image}
                            />
                        ))
                    }
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
    }
})

export default GamesScreen;