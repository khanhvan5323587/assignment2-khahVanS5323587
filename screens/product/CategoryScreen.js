import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
 

const CategoryScreen = ({ navigation }) => {
    return( 
        <View style={styles.container}> {/* <--- Connect the style here */}
            <TouchableOpacity onPress={()=> navigation.navigate("ProductList")}>
                <Text style={{ fontSize: 50 }}>Category Screen (Click Me)</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CategoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
