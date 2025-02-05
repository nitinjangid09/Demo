import { StyleSheet, } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEEEEE",
        padding: 20,
    },
    header: {
        alignItems: "center",
        marginBottom: 20,
        flexDirection:"row"
    },
    backArrow: {
        height: 20,
        width: 20,
    },
    headerText: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
        left:"23%"
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
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
        marginBottom: 5,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#CCC",
        fontSize: 16,
        padding: 10,
        color: "#333",
    },
    buttonContainer: {
        alignItems: "center",
        marginTop: 20,
    },
    button: {
        backgroundColor: "#38ACEC",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        width: "90%",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});