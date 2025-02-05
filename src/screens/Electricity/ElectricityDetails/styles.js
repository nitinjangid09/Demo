import { StyleSheet, } from "react-native";
import { buttonContainer, button, buttonText } from "../../../componets/Buttons/CommonButton/style";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    backButton: {
        marginRight: 10,
    },
    backIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        left: "30%"
    },
    form: {
        padding: 20,
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    selectText: {
        fontSize: 14,
        color: '#333',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        padding: 10,
        marginBottom: 10,
        fontSize: 14,
    },
    reminderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    reminderText: {
        fontSize: 14,
        marginLeft: 10,
    },
    Button: {
        backgroundColor: "#38ACEC",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        padding: 15,
    },
    ButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    noteText: {
        fontSize: 12,
        color: '#555',
        marginTop: 10,
    },
    footer: {
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 14,
        color: '#007BFF',
    },
});