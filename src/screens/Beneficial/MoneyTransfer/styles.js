import { StyleSheet } from "react-native";
import { HeaderFont } from "../../../componets/Utils/theme";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEEEEE",
        padding: 16,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,

    },
    headerText: {
        fontSize: HeaderFont.fontSize,
        fontWeight: HeaderFont.fontWeight,
        color: HeaderFont.color,
        left: "25%"

    },
    logo: {
        height: 100, // Reduced height for smaller size
        width: 150, // Reduced width for smaller size
        resizeMode: "contain", // Keeps aspect ratio
    },
    backArrow: {
        height: 20,
        width: 20,
    },
    balanceContainer: {
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    balanceLimit: {
        fontSize: 18,
        color: "#1F2937",
    },
    mobileNumber: {
        fontSize: 16,
        color: "#6B7280",
    },
    beneficiaryList: {
        paddingBottom: 20,
    },
    form: {
        backgroundColor: "#FFFFFF",
        borderRadius: 16,
        padding: 16,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4, // For Android shadow
    },
    beneficiaryName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#1F2937",
    },
    beneficiaryDetails: {
        fontSize: 14,
        color: "#6B7280",
    },
    transferButton: {
        backgroundColor: "#38ACEC",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    transferButtonText: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
    },
    Button: {
        backgroundColor: "green",
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: "center",
        marginTop: 20,
    },
    ButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
});