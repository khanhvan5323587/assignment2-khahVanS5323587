import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoryScreen, ProductDetailScreen, ProductListScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const ProductNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="ProductList" component={ProductListScreen} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        </Stack.Navigator>
    );
};

export default ProductNavigator;