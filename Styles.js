import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'center', 
        backgroundColor: '#9e9e9e'
    },

    text: {
        alignSelf: 'flex-start',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        marginLeft: 20,
    },

    textDescription: {
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    image: {
        height: 162,
        justifyContent: "center",
        borderRadius: 3,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        marginBottom: 15,
    },
});