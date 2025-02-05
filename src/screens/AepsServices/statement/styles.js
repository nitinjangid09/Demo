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
        width: 20
    },
    Text: {
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 20
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
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        padding: 10,
        marginBottom: 15,
        fontSize: 14,
    },
    Button: {
        backgroundColor: "#38ACEC",
        padding: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },
    ButtonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
    },
});