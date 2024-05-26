import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';
import defaultCarIcon from '../assets/default_car_icon.png'; // Ruta corregida

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
    <View style={styles.container}>
      <Text style={styles.label}>Marca:</Text>
      <TextInput
        style={styles.input}
        value={brand}
        onChangeText={setBrand}
        placeholder="Ingrese la marca"
      />
      <Text style={styles.label}>Modelo:</Text>
      <TextInput
        style={styles.input}
        value={model}
        onChangeText={setModel}
        placeholder="Ingrese el modelo"
      />
      <Text style={styles.label}>Placa:</Text>
      <TextInput
        style={styles.input}
        value={plate}
        onChangeText={setPlate}
        placeholder="Ingrese la placa"
      />
      <Text style={styles.label}>Logo:</Text>
      <Image source={logo} style={styles.logo} />
      <Button title="Seleccionar Imagen" onPress={pickImage} />
      <Button title="Guardar Vehículo" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default AddVehicleScreen;
