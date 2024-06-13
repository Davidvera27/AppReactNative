import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import defaultCarIcon from '../assets/default_car_icon.png';

const AddVehicleScreen = ({ route }) => {
  const { addVehicle } = route.params;
  const navigation = useNavigation();
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [plate, setPlate] = useState('');
  const [logo, setLogo] = useState(defaultCarIcon);

  const handleSave = () => {
    const newVehicle = {
      id: uuid.v4(),
      brand,
      model,
      plate,
      logo,
    };
    addVehicle(newVehicle);
    navigation.goBack();
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setLogo({ uri: result.uri });
    }
  };

  return (
    <ImageBackground source={require('../assets/BackGround_HOME_6.png')} style={styles.backgroundImage} imageStyle={styles.backgroundImageStyle}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.label}>Marca:</Text>
          <TextInput
            style={styles.input}
            value={brand}
            onChangeText={setBrand}
            placeholder="Ingrese la marca"
            placeholderTextColor="#072949"
          />
          <Text style={styles.label}>Modelo:</Text>
          <TextInput
            style={styles.input}
            value={model}
            onChangeText={setModel}
            placeholder="Ingrese el modelo"
            placeholderTextColor="#072949"
          />
          <Text style={styles.label}>Placa:</Text>
          <TextInput
            style={styles.input}
            value={plate}
            onChangeText={setPlate}
            placeholder="Ingrese la placa"
            placeholderTextColor="#072949"
          />
          <Text style={styles.label}>Logo:</Text>
          <TouchableOpacity onPress={pickImage}>
            <Image source={logo} style={styles.logo} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Guardar Vehículo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImageStyle: {
    resizeMode: 'cover', // Ensure the image covers the whole background
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)', // Dark overlay to enhance readability
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white background
    padding: 20,
    borderRadius: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  input: {
    borderWidth: 3,
    borderColor: '#115da3',
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
    borderRadius: 10,
    color: '#000',
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
    alignSelf: 'center',
  },
  saveButton: {
    backgroundColor: '#115da3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AddVehicleScreen;
