import { StyleSheet, } from "react-native";

export default styles = StyleSheet.create({
    container: {
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
        width: "25%", // Adjusted for spacing
        marginVertical: 10,
        alignItems: "center",
    },
    iconWrapper: {
        height: 50,
    },
    icon: {
        width: 40,
        height: 40,
    },
    title: {
        fontSize: 12,
        color: "#555",
        textAlign: "center",
    },
});