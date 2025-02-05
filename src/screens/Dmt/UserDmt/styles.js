import { StyleSheet, } from "react-native";
import { HeaderFont,container } from "../../../componets/Utils/theme";
export default styles = StyleSheet.create({
    container: {
        flex: container.flex,
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
        fontSize: HeaderFont.fontSize,
        fontWeight: HeaderFont.fontWeight,
        color: HeaderFont.color,
        left:"30%"
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
        marginBottom: 15,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
        marginBottom: 5,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#CCC",
        padding: 10,
        fontSize: 16,
        color: "#333",
        borderRadius: 8,
    },
});