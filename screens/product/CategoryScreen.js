import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';


const CategoryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View >
                <Text style={styles.title}>Categories</Text>
            </View>

            <View style={styles.box}>
                <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
                    <Text style={styles.items}>Electronics</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
                    <Text style={styles.items}>Jewelery</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
                    <Text style={styles.items}>Men's Clothing</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ProductList")}>
                    <Text style={styles.items}>Women's Clothing</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default CategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20

    },
    title: {
        // borderWidth: 1,
        width: 370,
        padding: 20,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#14cfa3',
        color: '#100909',
        textAlign: 'center',
        color: '#fff',
        fontSize: 30

    },
    box: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        // borderBlockColor: '#56c37a'

    },
    items: {
        backgroundColor: '#2ac565',
        color: '#ffffff',
        padding: 10,
        margin: 10,
        textAlign: 'center',
        width: 300,
        borderWidth: 1,
        borderColor: '#378920',
        borderRadius: 5,
        fontSize: 20,


    }
});
