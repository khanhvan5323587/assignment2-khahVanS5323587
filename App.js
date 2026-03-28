import React from 'react'; // Added missing React import
import { NavigationContainer } from '@react-navigation/native';
import ProductNavigator from "./src/navigators/ProductNavigation";

const App = () => {
    return (
        <NavigationContainer>
            <ProductNavigator />
        </NavigationContainer>
    );
}

export default App;