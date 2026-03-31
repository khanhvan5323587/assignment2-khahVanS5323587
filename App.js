import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ProductNavigator from "./src/navigators/ProductNavigation";

const App = () => {
    return (
        <NavigationContainer>
            <ProductNavigator />
        </NavigationContainer>
    );
}
console.log("testing")

export default App;