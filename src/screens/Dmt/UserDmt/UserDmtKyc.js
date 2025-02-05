import React from "react";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Button from "../../../componets/Buttons/CommonButton/Button"; // Ensure Button component is implemented correctly

const UserDmtKYC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../../assets/Icons/back.png")} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.headerText}>User KYC</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                <FormInput label="First Name" placeholder="Enter First Name" />
                <FormInput label="Last Name" placeholder="Enter Last Name" />
                <FormInput label="Mobile Number" placeholder="Enter Mobile Number" />
                <FormInput label="Email" placeholder="Enter Email" />
                <FormInput label="Address" placeholder="Enter Address" />

                {/* Submit Button */}
                <Button
                    title="Submit"
                    onPress={() => navigation.navigate("MoneyTransfer")}
                />
            </View>
        </View>
    );
};

// Reusable Form Input Component with Label
const FormInput = ({ label, placeholder }) => (
    <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#999"
        />
    </View>
);

export default UserDmtKYC;