import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { global } from '../../src/constant/const';

const ProductListScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const route = useRoute();

    const mockProducts = [
        { id: 1, title: 'Headphones', price: 99.99, image: 'https://via.placeholder.com/150?text=HP', category: 'Electronics' },
        { id: 2, title: 'Smart Watch', price: 199.99, image: 'https://via.placeholder.com/150?text=SW', category: 'Electronics' },
        { id: 3, title: 'Speaker', price: 49.99, image: 'https://via.placeholder.com/150?text=SP', category: 'Electronics' },

    ];

    useEffect(() => {
        const categoryName = route.params?.categoryName || 'Electronics';
        const filteredProducts = mockProducts.filter(product => product.category === categoryName);
        setProducts(filteredProducts);

    }, []);

    const renderProduct = ({ item }) => (
        <TouchableOpacity style={styles.productItem} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.title}</Text>
                <Text style={styles.productPrice}>${item.price}</Text>
                <Text style={styles.categoryBadge}>{item.category}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={global.header}>
                <Text style={global.title}>{route.params?.categoryName || 'Products'}</Text>
            </View>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                numColumns={1}
                contentContainerStyle={styles.listContent} />
            <View style={styles.footer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProductListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listContent: {
        padding: 15,
    },
    productItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
    },
    productInfo: {
        flex: 1,
        marginLeft: 15,
        justifyContent: 'center',
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    productPrice: {
        fontSize: 18,
        color: '#14cfa3',
        fontWeight: 'bold',
        marginTop: 4,
    },
    categoryBadge: {
        fontSize: 12,
        color: '#888',
        fontStyle: 'italic',
        marginTop: 2,
    },
    footer: {
        padding: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    backButton: {
        backgroundColor: '#14cfa3',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    backButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});