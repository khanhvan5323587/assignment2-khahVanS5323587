import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { categories } from '../../src/constant/const';



const CategoryScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>Categories</Text>
            </View>
            <View style={styles.box}>
                <FlatList
                    data={categories}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.itemTouchable}
                            onPress={() => navigation.navigate("ProductList", { categoryName: item })}
                        >
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
        padding: 15,
        margin: 10,
        textAlign: 'center',
        width: 300,
        borderWidth: 1,
        borderColor: '#378920',
        borderRadius: 5,
        fontSize: 20,
    },
    itemTouchable: {
        alignItems: 'center',
    }
});
