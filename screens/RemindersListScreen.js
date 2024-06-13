import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Modal, TextInput, Picker } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import VehicleReminder from '../components/VehicleReminder'; // Asegúrate de que la ruta es correcta
import styles from '../styles/styles';

function RemindersListScreen({ route, navigation }) {
  const { vehicle } = route.params;
  console.log('Vehicle received:', vehicle);
  const [reminders, setReminders] = useState(vehicle.reminders || []);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingReminder, setEditingReminder] = useState(null);
  const [reminderEvent, setReminderEvent] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [priority, setPriority] = useState('Normal');

  const deleteReminder = (id) => {
    Alert.alert(
      'Confirmar Eliminación',
      '¿Estás seguro de que quieres eliminar este recordatorio?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
            setReminders(updatedReminders);
            saveReminders(updatedReminders);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const editReminder = (reminder) => {
    setEditingReminder(reminder);
    setReminderEvent(reminder.event);
    setStartDate(new Date(reminder.start));
    setEndDate(new Date(reminder.end));
    setLocation(reminder.location);
    setPriority(reminder.priority);
    setModalVisible(true);
  };

  const saveReminders = async (updatedReminders) => {
    try {
      const storedVehicles = await AsyncStorage.getItem('vehicles');
      let vehicles = storedVehicles ? JSON.parse(storedVehicles) : [];
      vehicles = vehicles.map((v) => (v.id === vehicle.id ? { ...v, reminders: updatedReminders } : v));
      await AsyncStorage.setItem('vehicles', JSON.stringify(vehicles));
    } catch (error) {
      console.error('Error saving reminders to AsyncStorage', error);
    }
  };

  const handleSaveChanges = () => {
    const updatedReminders = reminders.map((reminder) =>
      reminder.id === editingReminder.id
        ? { ...reminder, event: reminderEvent, start: startDate.toISOString(), end: endDate.toISOString(), location, priority }
        : reminder
    );
    setReminders(updatedReminders);
    saveReminders(updatedReminders);
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <VehicleReminder
      reminder={item}
      onDelete={() => deleteReminder(item.id)}
      onEdit={() => editReminder(item)}
    />
  );

  return (
    <View style={styles.container}>
      {reminders.length > 0 ? (
        <FlatList
          data={reminders}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <Text style={styles.noRemindersText}>No hay recordatorios</Text>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Editar Recordatorio</Text>
            <TextInput
              style={styles.input}
              placeholder="Evento"
              onChangeText={(text) => setReminderEvent(text)}
              value={reminderEvent}
            />
            <TouchableOpacity onPress={() => setShowStartDatePicker(true)}>
              <Text style={styles.datePickerText}>Fecha de Inicio: {startDate.toDateString()}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowEndDatePicker(true)}>
              <Text style={styles.datePickerText}>Fecha de Fin: {endDate.toDateString()}</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Ubicación"
              onChangeText={(text) => setLocation(text)}
              value={location}
            />
            <Picker selectedValue={priority} style={styles.picker} onValueChange={(itemValue) => setPriority(itemValue)}>
              <Picker.Item label="Normal" value="Normal" />
              <Picker.Item label="Alta" value="Alta" />
              <Picker.Item label="Baja" value="Baja" />
            </Picker>
            <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
              <Text style={styles.buttonText}>Guardar Cambios</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default RemindersListScreen;
