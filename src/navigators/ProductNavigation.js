import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CategoryScreen, ProductDetailScreen, ProductListScreen } from '../../screens';

const Stack = createStackNavigator();

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