import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'gold',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: 'gold',
    borderRadius: 20,
    padding: 10,
  },
  addButtonText: {
    fontSize: 24,
    color: '#fff',
  },
  item: {
    padding: 5,
    marginVertical: 3,
    marginHorizontal: 14,
    backgroundColor: '#ffffff1f',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gold',
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
  },
  selectedItem: {
    backgroundColor: '#FFD700',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: 'gold',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 12,
    color: 'gold',
    textAlign: 'center',
    marginLeft: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gold',
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
    borderColor: 'gold',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    color: 'white',
  },
  button: {
    backgroundColor: 'gold',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'black',
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
});

export default styles;
