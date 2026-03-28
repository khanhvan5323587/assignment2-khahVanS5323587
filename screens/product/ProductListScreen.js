import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
 

const ProductListDetail = ({ navigation }) => {
    return ( // Added return
        <View style={styles.container}>
            <Text>ProductListDetail</Text>
        </View>
    );
}
export default ProductListDetail 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
