import { StyleSheet, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window"); // Get screen dimensions

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEEEEE",
        paddingTop: 10,
        paddingHorizontal: width * 0.05, // 5% of screen width for padding
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        height: 50,
        width: 150,
        resizeMode: "contain",
    },
    userIcon: {
        height: 35,
        width: 35,
        resizeMode: "contain",
    },
    wallet: {
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 20,
    },
    walletContainer: {
        flexDirection: "row", // Layout in a row
        alignItems: "center", // Center vertically
        height: 60,
        marginHorizontal: width * 0.02, // 2% margin for spacing
        borderColor: "gray",
        borderRadius: 14,
        paddingLeft: 10,
        backgroundColor: "#F5F5F5",
        marginBottom: 10,
        width: "45%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
    },
    walletIcon: {
        height: 20,
        width: 20,
        marginRight: 10, // Spacing between icon and text
    },
    walletText: {
        position: "absolute", // Position on top
        top: -10, // Adjust to appear above the wallet container
        ...Platform.select({
            ios: {
                left: -8,
                color: "white",
                backgroundColor: "red",
                borderRadius: 14,
                fontSize: 12,
                lineHeight: 20,
                fontWeight: "bold",
            },
            android: {
                left: -8,
                color: "white",
                backgroundColor: "red",
                borderRadius: 14,
                fontSize: 14,
                lineHeight: 22,
                fontWeight: "bold",
            },
        }),
        height: 20,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    walletText2: {
        position: "absolute",
        top: -10, // Adjust to appear above the wallet container
        ...Platform.select({
            ios: {
                left: 122,
                backgroundColor: "green",
            },
            android: {
                left: 130,
                backgroundColor: "green",
            },
        }),
        color: "white",
        borderRadius: 10,
        height: 20,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 12,
        lineHeight: 20,
        fontWeight: "bold",
    },
    banner: {
        marginTop: 10,
    },
    adds: {
        height: height * 0.2, // Responsive height, 20% of screen height
        width: width * 0.88, // Responsive width, 88% of screen width
        marginHorizontal: width * 0.02, // 2% margin for spacing
        borderRadius: 14,
        borderColor: "gray",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 5,
        marginBottom:15
    },
    serviceText: {
        marginTop: 20,
    },
    textService: {
        fontSize: 18,
        fontWeight: "600",
        marginLeft: 10,
    },
    servicesContainer: {
        paddingTop: 15,
        
    },
});