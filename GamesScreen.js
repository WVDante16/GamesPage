import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Box from './Box';

const games = [
    {id: 1, name: "GuessMyNumber", description: "Encuentra el numero"},
    {id: 2, name: "RockPaperScissors", description: "Resolver disputas"},
    {id: 3, name: "UwU", description: "Juego funky"},
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
                                //image = {game.image}
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
    },

    margin: {
        marginBottom: 50
    }
})

export default GamesScreen;