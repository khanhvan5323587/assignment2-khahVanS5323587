export const CATEGORIES_API = 'https://fakestoreapi.com/products/categories';
export const PRODUCTS_API = 'https://fakestoreapi.com/products/category/';
import { StyleSheet } from "react-native";


export const categories = [
    'Electronics',
    'Jewelery',
    "Men's clothing",
    "Women's clothing"
];

export const global = StyleSheet.create({
    title: {
        width: 370,
        padding: 15,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#14cfa3',
        color: '#100909',
        textAlign: 'center',
        color: '#fff',
        fontSize: 25
    },
    header: {
        paddingTop: 20,

        backgroundColor: '#fff',
    },
})
