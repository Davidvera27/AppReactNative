import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 10,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImageStyle: {
    resizeMode: 'cover',
    alignItems: 'center', // Ensure the image covers the whole background
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    paddingHorizontal: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ADD8E6',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#ADD8E6',
    borderRadius: 50, // Completely round
    width: 60, // Width and height to make it a perfect circle
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 40, // Larger font size for "+"
    color: '#000',
    fontWeight: 'bold', // Thicker "+"
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  item: {
    padding: 5,
    marginVertical: 3,
    marginHorizontal: 14,
    backgroundColor: '#ffffff1f',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ADD8E6',
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  selectedItem: {
    backgroundColor: '#ADD8E6',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#ADD8E6',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'left',
    marginLeft: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ADD8E6',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vehicleLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ADD8E6',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    color: '#000',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 50,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: '#000',
  },
  datePickerText: {
    color: '#ADD8E6',
    marginVertical: 10,
  },
  picker: {
    width: '100%',
    height: 40,
    color: '#fff',
  },
  reminderList: {
    padding: 10,
  },
  vehicleDetailText: {
    fontSize: 14,
    color: '#FFFFFF',  // Color claro para el texto
    textAlign: 'center',
    marginVertical: 5,
  },
  reminderItem: {
    backgroundColor: '#1f1f1f',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  reminderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ADD8E6',
    marginBottom: 5,
  },
  reminderDetail: {
    fontSize: 14,
    color: '#ADD8E6',
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: '#ADD8E6',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  deleteButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#FFA500', // Anaranjado para el botón de editar
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10, // Separación entre botones
  },
  editButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default styles;
