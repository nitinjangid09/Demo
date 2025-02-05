import { StyleSheet, } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
      },
      header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"center",
        padding: 16,
      },
    
      headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
      },
      paymentCard: {
        backgroundColor: '#FFF',
        margin: 16,
        borderRadius: 10,
        padding: 16,
        elevation: 2,
      },
      cardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      cardText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      cardAmount: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
      },
      cardSubText: {
        fontSize: 14,
        color: 'gray',
        marginTop: 8,
      },
      offersCard: {
        backgroundColor: 'white',
        marginHorizontal: 16,
        borderRadius: 10,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      offersText: {
        fontSize: 16,
        color: '#007AFF',
      },
      arrow: {
        fontSize: 18,
        color: '#007AFF',
      },
      amountDetails: {
        backgroundColor: '#FFF',
        margin: 16,
        borderRadius: 10,
        padding: 16,
        elevation: 2,
      },
      sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      amountRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
      },
      amountText: {
        fontSize: 14,
        color: 'gray',
      },
      totalText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      footerText: {
        textAlign: 'center',
        fontSize: 14,
        color: 'gray',
        marginTop: 16,
      },
      footerSubText: {
        fontWeight: 'bold',
      },
      bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        top:300
      },
      bottomAmount: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      Button: {
        backgroundColor: '#38ACEC',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5,
      },
      ButtonText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
      },
    });
    