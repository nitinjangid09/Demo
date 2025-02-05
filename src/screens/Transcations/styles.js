import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#666',
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  details: {
    flex: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  account: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3,
  },
  dateTime: {
    fontSize: 12,
    color: '#999',
  },
  amountContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    fontSize: 14,
    marginTop: 5,
  },
  dateHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginVertical: 10,
    paddingHorizontal: 5,
    
  },
});

export default styles;