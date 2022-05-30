import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Box({id, name, description, image}) {
    const navigation = useNavigation();

    return (
        <View stile={styles.root}>
            <Image source={{uri: image}} resizeMode="contain" style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.text}>{description}</Text>
                <Button
                    color="#ae52d4"
                    title="Jugar"
                    onPress={
                        () => navigation.navigate('Game', {
                            id: id,
                            name: name,
                            description: description,
                        })
                    }
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'column',
        width: 162,
        height: 250,
        backgroundColor: "#5d99c6",
        borderWidth: 1,
        borderColor: "darkslategray",
        borderRadius: 4,
        margin: 5,
    },

    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 16
    },

    image: {
        height: 162,
        justifyContent: "center",
        borderRadius: 3,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
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

export default Box;