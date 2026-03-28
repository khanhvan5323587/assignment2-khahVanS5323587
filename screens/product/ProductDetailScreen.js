import { StyleSheet, Text, View } from 'react-native';
 
const ProductDetailScreen = ({ navigation }) => {
    return ( // Added return
        <View style={styles.container}>
            <Text>ProductDetailScreen</Text>
        </View>
    );
}
export default ProductDetailScreen 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
