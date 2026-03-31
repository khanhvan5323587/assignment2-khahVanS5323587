import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ProductDetailScreen = ({ navigation }) => {
  const route = useRoute();
  const product = route.params?.product;

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>No product selected</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.detailImage} />
      <View style={styles.detailContent}>
        <Text style={styles.detailName}>{product.title}</Text>
        <Text style={styles.detailPrice}>${product.price}</Text>
        <Text style={styles.detailCategory}>Category: {product.category}</Text>
        <Text style={styles.detailDesc}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  detailContent: {
    padding: 20,
  },
  detailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailPrice: {
    fontSize: 28,
    color: '#14cfa3',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailCategory: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  detailDesc: {
    fontSize: 16,
    lineHeight: 24,
  },
});
