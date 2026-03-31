import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CategoryScreen, ProductDetailScreen, ProductListScreen } from '../../screens';

const Stack = createNativeStackNavigator();

const ProductNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerStyle: { backgroundColor: '#14cfa3' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}
        >
            <Stack.Screen name="Category" component={CategoryScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ProductList" component={ProductListScreen} options={{ headerShown: true }} />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: true }} />
        </Stack.Navigator>
    );
};

export default ProductNavigator;