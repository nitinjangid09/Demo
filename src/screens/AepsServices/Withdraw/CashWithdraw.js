import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";  // External styles
import Button from "../../../componets/Buttons/CommonButton/Button";  // External Button component

const CashWithdrawal = () => {
    const navigation = useNavigation();

    const [mobileNumber, setMobileNumber] = useState("");
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [amount, setAmount] = useState("");  // Added separate state for amount
    const [selectedBank, setSelectedBank] = useState("");

    const handleSubmit = () => {
        console.log({
            mobileNumber,
            aadhaarNumber,
            amount,
            selectedBank,
        });
        // You can add more logic here, like form validation or API calls
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../../assets/Icons/back.png")} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Cash Withdrawal</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                {/* Bank Name */}
                <Text style={styles.Text}>Bank</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Bank Name"
                    value={selectedBank}
                    onChangeText={setSelectedBank}
                />

                {/* Mobile Number */}
                <Text style={styles.Text}>Mobile Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Mobile Number"
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                    keyboardType="phone-pad"
                />

                {/* Aadhaar Card Number */}
                <Text style={styles.Text}>Aadhaar Card Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Aadhaar Card Number"
                    value={aadhaarNumber}
                    onChangeText={setAadhaarNumber}
                    keyboardType="numeric"
                />

                {/* Amount */}
                <Text style={styles.Text}>Amount</Text>
                <TextInput
                    style={styles.inputAmount}
                    placeholder="Enter Amount"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                />

                {/* Submit Button */}
                <View style={styles.buttonContainer}>
                    <Button
                        title="Submit"
                        onPress={() => {
                            handleSubmit(); // Call handleSubmit on button press
                            navigation.navigate("");  // Change "NextScreen" to your desired route
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default CashWithdrawal;