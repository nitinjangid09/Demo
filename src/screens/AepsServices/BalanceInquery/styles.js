import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5", // Changed to a soft background color for better readability
        padding: 20,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20, // Slightly larger for better visibility
        fontWeight: "bold",
        color: "#333", // Neutral dark color for readability
        textAlign: "center",
        flex: 1, // Ensures text stays centered
    },
    backArrow: {
        height: 24,
        width: 24,
    },
    form: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        padding: 20,
        marginVertical: 15, // Added vertical margin for spacing
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 }, // Reduced shadow for a softer look
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    label: {
        fontSize: 16,
        fontWeight: "600", // Slightly bolder for emphasis
        color: "#555", // A softer dark color for labels
        marginBottom: 5,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#CCC", // Neutral color for input borders
        paddingVertical: 8,
        marginBottom: 15,
        fontSize: 14,
        color: "#333",
    },
    submitButton: {
        backgroundColor: "#007BFF", // A vibrant blue color for call-to-action
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },
    submitButtonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default styles;