import { StyleSheet,Dimensions } from "react-native";


const { width } = Dimensions.get("window"); // Get screen width for responsive styling

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEEEEE",
        padding: 20,
    },
    header: {
        flexDirection: "row",
        marginBottom: 30,
    },

    backArrow: {
        height: 20,
        width: 20
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        left: "30%"
    },
    form: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,    },
    Text: {
        fontWeight: "400",
        fontSize: 20,
        padding: 5
    },
    input: {
        borderBottomWidth:1,
        borderBottomColor:"gray",
        borderRadius: 8,
        padding: 10,
        marginBottom: 30,
        fontSize: 16,
    },
    inputAmount: {
        borderBottomWidth: 1,
        borderBottomColor:"gray",
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 14,

    },
    submitButton: {
        backgroundColor: "#38ACEC",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 40,
        width:300,
        
    },
    submitButtonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
    },
});