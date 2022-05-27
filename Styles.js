import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'column',
        alignItems: 'center', 
    },

    text: {
        alignSelf: 'flex-start',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 16,
    },

    textDescription: {
        alignSelf: 'flex-start',
        fontSize: 16,
        marginBottom: 20,
        marginLeft: 16,
    },

    image: {
        height: 162,
        justifyContent: "center",
        borderRadius: 3,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        marginBottom: 16,
    },

});