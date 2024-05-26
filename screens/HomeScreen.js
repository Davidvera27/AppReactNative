import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ShinyButton from '../components/ShinyButton';
import initialVehicles from '../data/vehicles';
import styles from '../styles/styles';

function HomeScreen({ navigation }) {
  const [vehicles, setVehicles] = useState([]);
  const [selectedVehicles, setSelectedVehicles] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        const storedVehicles = await AsyncStorage.getItem('vehicles');
        if (storedVehicles !== null) {
          setVehicles(JSON.parse(storedVehicles));
        } else {
          setVehicles(initialVehicles);
        }
      } catch (error) {
        console.error('Error loading vehicles from AsyncStorage', error);
        Alert.alert('Error', 'Hubo un problema cargando los vehículos. Por favor, intenta nuevamente.');
        setVehicles(initialVehicles);
      }
    };
    loadVehicles();
  }, []);

  const saveVehicles = async (vehicles) => {
    try {
      await AsyncStorage.setItem('vehicles', JSON.stringify(vehicles));
    } catch (error) {
      console.error('Error saving vehicles to AsyncStorage', error);
      Alert.alert('Error', 'Hubo un problema guardando los vehículos. Por favor, intenta nuevamente.');
    }
  };

  const toggleVehicleSelection = (id) => {
    setSelectedVehicles((prevSelected) => {
      const updatedSelection = new Set(prevSelected);
      if (updatedSelection.has(id)) {
        updatedSelection.delete(id);
      } else {
        updatedSelection.add(id);
      }
      return Array.from(updatedSelection);
    });
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    setSelectedVehicles([]);
  };

  const handleDelete = () => {
    Alert.alert(
      'Confirmar Eliminación',
      '¿Estás seguro de que quieres eliminar los vehículos seleccionados?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            const updatedVehicles = vehicles.filter((vehicle) => !selectedVehicles.includes(vehicle.id));
            setSelectedVehicles([]);
            setIsEditMode(false);
            setVehicles(updatedVehicles);
            saveVehicles(updatedVehicles);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const addVehicle = (newVehicle) => {
    const updatedVehicles = [...vehicles, newVehicle];
    setVehicles(updatedVehicles);
    saveVehicles(updatedVehicles);
  };

  const CheckBox = ({ isChecked, id }) => (
    <TouchableOpacity style={styles.checkbox} onPress={() => toggleVehicleSelection(id)}>
      {isChecked && <Text>X</Text>}
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item, selectedVehicles.includes(item.id) && styles.selectedItem]}
      onPress={() => {
        if (isEditMode) {
          toggleVehicleSelection(item.id);
        } else {
          navigation.navigate('Details', { vehicle: item });
        }
      }}
      onLongPress={() => toggleEditMode()}
    >
      {isEditMode && <CheckBox isChecked={selectedVehicles.includes(item.id)} id={item.id} />}
      <View style={styles.itemContent}>
        <Image source={item.logo} style={styles.vehicleLogo} />
        <View>
          <Text style={styles.title}>{`${item.brand} ${item.model}`}</Text>
          <Text style={styles.subtitle}>{item.plate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground source={require('../assets/BackGround_HOME_5.png')} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Vehicle Manager</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddVehicle', { addVehicle })} style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        {isEditMode && (
          <View style={styles.toolbar}>
            <ShinyButton title="Eliminar" onPress={handleDelete} />
          </View>
        )}
        <FlatList
          data={vehicles}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;
