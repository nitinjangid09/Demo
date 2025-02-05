import { StyleSheet, } from "react-native";
import { backArrow, container, header, headerText, form, label } from "../../../componets/Utils/theme";

export default styles = StyleSheet.create({
    container: {
        flex: container.flex,
        backgroundColor: container.backgroundColor,
        padding: container.padding,
    },
    header: {
        flexDirection: header.flexDirection,
        alignItems: header.alignItems,
        marginBottom: header.marginBottom,
    },
    backArrow: {
        height: backArrow.height,
        width: backArrow.width,
    },
    headerText: {
        flex: headerText.flex,
        fontSize:headerText.fontSize,
        fontWeight: headerText.fontWeight,
        color: headerText.color,
        textAlign: headerText.textAlign,
        right:headerText.right
    },
    form: {
        backgroundColor: form.backgroundColor,
        borderRadius: form.borderRadius,
        padding: form.padding,
        marginBottom: form.marginBottom,
        shadowColor: form.shadowColor,
        shadowOpacity:form.shadowOpacity,
        shadowRadius: form.shadowRadius,
        shadowOffset: form.shadowOffset,
        elevation: form.elevation,
    },
    label: {
        fontSize: label.fontSize,
        color: label.color,
        marginBottom:label.marginBottom,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        padding: 8,
        fontSize: 14,
        marginBottom: 20,
        color: "#333",
        
    },
    paymentMethods: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,
        width: "50%"
    },
    paymentButton: {
        flex: 1,
        marginHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "gray",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    selectedPaymentButton: {
        backgroundColor: "lightgray",
    },
    paymentButtonText: {
        fontSize: 14,
        fontWeight: "bold",
    },
    primaryButton: {
        backgroundColor: "#38ACEC",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 20,
    },
    secondaryButton: {
        backgroundColor: "green",
    },
    buttonText: {
        color: "#fff",
        fontSize: 14,
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
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    modalTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    closeButton: {
        fontSize: 16,
        fontWeight: "bold",
    },
    modalInput: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        padding: 10,
        fontSize: 14,
        marginBottom: 20,
        color: "#333",
    },
    dropdown: {
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        paddingVertical: 10,
        paddingHorizontal: 5,
        marginBottom: 20,
      },
      dropdownText: {
        fontSize: 14,
        color: "#333",
      },
});