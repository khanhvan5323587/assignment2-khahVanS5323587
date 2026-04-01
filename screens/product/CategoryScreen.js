import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { categories } from '../../src/constant/const';
import { global } from '../../src/constant/const';


const CategoryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={global.header}>
                <Text style={global.title}>Categories</Text>
            </View>
            <View style={styles.box}>
                <FlatList
                    data={categories}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.itemTouchable} onPress={() => navigation.navigate("ProductList", { categoryName: item })} >
                            <Text style={styles.items}>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )
}
export default CategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    box: {
        padding: 5,
        borderRadius: 5,
        // flex: 1,
        alignItems: 'center',
    },
    items: {
        backgroundColor: '#ffff',
        color: '#14cfa3',
        padding: 15,
        margin: 10,
        textAlign: 'center',
        width: 300,
        borderWidth: 1,
        borderColor: '#208970',
        borderRadius: 5,
        fontSize: 20,
        fontWeight: "bold"

    },
    itemTouchable: {
        alignItems: 'center',
    }
});
