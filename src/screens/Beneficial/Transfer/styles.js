import { StyleSheet, } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#EEEEEE",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    inputContainer: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        borderRadius: 8,
        padding: 15,
        fontSize: 16,
        color: "#333",
        marginBottom: 30,
    },
    button: {
        backgroundColor: "#38ACEC",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalBox: {
        width: "85%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
    },
    modalContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    modalText: {
        fontSize: 18,
        textAlign: "center",
    },
    modalInput: {
        marginTop: 10,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        borderRadius: 8,
        padding: 15,
        fontSize: 16,
        color: "#333",
        backgroundColor: "#fff",
    },
    buttonText2: {
        fontSize: 16,
        fontWeight: "bold",
    },
    sendOtpButton: {
        backgroundColor: "#38ACEC",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 30,
    },
   
    sendOtpText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
});

