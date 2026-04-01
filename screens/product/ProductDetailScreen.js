import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { global } from '../../src/constant/const';
import { useLayoutEffect } from 'react';

const ProductDetailScreen = ({ navigation }) => {
  const route = useRoute();
  const product = route.params?.product;

  return (
    <ScrollView style={styles.container}>
      <View style={global.header}>
        <Text style={global.title}>Product Detail</Text>
      </View>
      <Image source={{ uri: product.image }} style={styles.detailImage} />
      <View style={styles.detailContent}>
        <Text style={styles.detailName}>{product.title}</Text>
        <Text style={styles.detailPrice}>${product.price}</Text>
        <Text style={styles.detailCategory}>Category: {product.category}</Text>
        <Text style={styles.detailDesc}>{product.description}</Text>
      </View>
      <View style={styles.button}>
        <View>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
  button: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  backButton: {
    marginHorizontal: 60,
    padding: 10,
    backgroundColor: "#14cfa3",
    borderRadius: 5
  },
  buttonText: {
    color: '#fff'
  }

});
