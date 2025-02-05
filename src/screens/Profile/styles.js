import { StyleSheet, } from "react-native";
import { form, input } from "../../componets/Utils/theme";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EEEEEE",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    headerText: {
        flex: 1,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    profileCard: {
        margin: form.margin,
        padding: form.padding,
        borderRadius: form.borderRadius,
        elevation: form.elevation,
        backgroundColor: form.backgroundColor,
        shadowColor: form.shadowColor,
        shadowOffset: form.shadowOffset,
        shadowOpacity: form.shadowOpacity,
        shadowRadius: form.shadowRadius,
        marginBottom: form.marginBottom,
        justifyContent: form.justifyContent,


    },
    profileRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatarContainer: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
    },
    avatar: {
        height: 40,
        width: 40,
    },
    profileDetails: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
    },
    info: {
        color: "#666",
        fontSize: 14,
    },
    detailsSection: {
        margin: 15,
        padding: 15,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 20,
        justifyContent: "space-between",
        borderRadius: 10,
        elevation: 3,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        paddingBottom: 10
    },
    editText: {
        color: "#007bff",
        fontSize: 14,
    },
    input: {
        borderBottomWidth: input.borderBottomWidth,
        borderBottomColor: input.borderBottomColor,
        height: input.height,
        paddingVertical: input.paddingVertical,
        marginBottom: input.marginBottom,
        fontSize: input.fontSize,
        color: input.color,
    },
    divider: {
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 15,
    },
});