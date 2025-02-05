import { StyleSheet, } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'EEEEEE',
      },
      header: {
        backgroundColor: 'white',
        paddingVertical: 15,
        alignItems: 'center',
        flexDirection:"row"
      },
      headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        left:"30%"
      },
      searchBar: {
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
        backgroundColor: '#FFF',
      },
      sectionContainer: {
        marginHorizontal: 10,
        marginVertical: 5,
      },
      stateText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      billerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        marginBottom: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EEE',
      },
      billerLogo: {
        width: 40,
        height: 40,
        marginRight: 10,
      },
      billerText: {
        fontSize: 14,
        color: '#333',
      },
      
    });