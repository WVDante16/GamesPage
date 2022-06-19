import React from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';

function List({data}) {
    return (
        <FlatList 
            data = {data}
            renderItem = {({item}) => <Text style={styles.list}>{item.value}</Text>} 
        />
    );
}

const styles = StyleSheet.create({
    list: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 15,
    }
})

export default List;