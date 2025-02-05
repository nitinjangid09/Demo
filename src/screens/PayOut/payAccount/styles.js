import { StyleSheet, } from "react-native";
import { container,header,headerText,form, input } from "../../../componets/Utils/theme";

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
    headerText: {
        flex: headerText.flex,
        fontSize: headerText.fontSize,
        fontWeight: headerText.fontWeight,
        color: headerText.color,
        textAlign: headerText.textAlign,
        right: headerText.right
    },
    form: {
        backgroundColor: form.backgroundColor,
        borderRadius: form.borderRadius,
        padding: form.padding,
        marginBottom: form.marginBottom,
        shadowColor: form.shadowColor,
        shadowOpacity: form.shadowOpacity,
        shadowRadius: form.shadowRadius,
        shadowOffset: form.shadowOffset,
        elevation: form.elevation,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
        marginBottom: 5,
    },
    input: {
        fontSize: input.fontSize,
            height: input.height,
            borderBottomWidth: input.borderBottomWidth,
            borderBottomColor: input.borderBottomColor,
            paddingHorizontal: input.paddingHorizontal,
    },
   
});