import React from "react";
import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";



const AddBeneficial = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../../assets/Icons/back.png")} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Add Beneficiary</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                <FormInput label="Bank Name" placeholder="Enter Bank Name" />
                <FormInput label="Account No" placeholder="Enter Account No." />
                <FormInput label="IFSC Code" placeholder="Enter IFSC Code" />
                <FormInput label="Account Name" placeholder="Enter Account Name" />
                <FormInput label="Pin Code" placeholder="Enter Pin Code" />
                <FormInput label="DOB" placeholder="Enter DOB" />

                {/* Add Button */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("MoneyTransfer")}
                    >
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

// Reusable Form Input Component
const FormInput = ({ label, placeholder }) => (
    <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#999" />
    </View>
);

export default AddBeneficial;

   