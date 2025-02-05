import { StyleSheet, } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        borderRadius:14,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
    },
    servicesWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    itemContainer: {
        width: "21%", // Adjusted for proper spacing
        marginVertical: 15,
        alignItems: "center",
    },
    iconWrapper: {
        height: 40,
    },
    icon: {
        width: 40,
        height: 40,
    },
    title: {
        marginTop: 10,
        fontSize: 13,
        color: "#333",
        textAlign: "center",
    },
});