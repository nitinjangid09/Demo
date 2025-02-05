import React from "react";
import {
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import styles from "./styles";

const PayOutAccount = () => {


    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.scrollView}>
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerText}>PayOut Account</Text>
                    </View>

                    {/* Form */}
                    <View style={styles.form}>
                        {[
                            { label: "Bank Name", placeholder: "Enter Bank Name" },
                            { label: "Account No", placeholder: "Enter Account No." },
                            { label: "IFSC Code", placeholder: "Enter IFSC Code" },
                            { label: "Account Name", placeholder: "Enter Account Name" },
                            { label: "Pin Code", placeholder: "Enter Pin Code", keyboardType: "numeric" },
                            { label: "DOB", placeholder: "Enter DOB" },
                        ].map((field, index) => (
                            <FormInput
                                key={index}
                                label={field.label}
                                placeholder={field.placeholder}
                                keyboardType={field.keyboardType}
                            />
                        ))}

                        {/* Add Button */}
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const FormInput = ({ label, placeholder, keyboardType = "default" }) => (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#999"
            keyboardType={keyboardType}
            returnKeyType="next"
        />
    </View>
);

export default PayOutAccount;
