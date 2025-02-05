import { StyleSheet, } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEEEEE",
        padding: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        left: "30%"
    },

    backArrow: {
        height: 20,
        width: 20,
    },
    form: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5, 
        alignItems:"center"
    },
    Text: {
        fontWeight: "500",
        fontSize: 20,
        padding: 5
    },
    input: {
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        padding: 15,
        fontSize: 16,
        marginBottom: 15,
    },
    buttonContainer:{
        alignItems: "center",
        marginTop: 20,
      },
       button:{
        backgroundColor: "#38ACEC",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        width: "90%",
        padding:15
      },
     buttonText : {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
      },
   
})