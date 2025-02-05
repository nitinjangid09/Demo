import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Button from "../../../componets/Buttons/CommonButton/Button"; // Ensure Button component is implemented correctly

const DmtLogin = () => {
    const navigation = useNavigation();
    const [mobileNumber, setMobileNumber] = useState("");
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [isMobileSubmitted, setIsMobileSubmitted] = useState(false);

    const handleMobileSubmit = () => {
        if (mobileNumber.trim().length === 10) {
            setIsMobileSubmitted(true); // Enable Aadhaar input
        } else {
            alert("Please enter a valid 10-digit mobile number.");
        }
    };

    const handleSubmit = () => {
        if (aadhaarNumber.trim().length === 12) {
            navigation.navigate("UserDmtKyc"); // Ensure this route exists in your navigation stack
        } else {
            alert("Please enter a valid 12-digit Aadhaar number.");
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../../assets/Icons/back.png")} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Money Transfer</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                {/* Mobile Number Input */}
                <TextInput
                    style={styles.input}
                    placeholder="Enter Mobile Number"
                    keyboardType="phone-pad"
                    maxLength={10}
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                    editable={!isMobileSubmitted} // Disable editing after submission
                />
                {/* Submit Button for Mobile Number */}
                {!isMobileSubmitted && (
                    <Button title="Submit Mobile Number" onPress={handleMobileSubmit} />
                )}

                {/* Aadhaar Number Input */}
                {isMobileSubmitted && (
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter Aadhaar Number"
                            keyboardType="numeric"
                            maxLength={12}
                            value={aadhaarNumber}
                            onChangeText={setAadhaarNumber}
                        />
                        {/* Submit Button for Aadhaar Number */}
                        <Button title="Submit Aadhaar Number" onPress={handleSubmit} />
                    </>
                )}
            </View>
        </View>
    );
};

export default DmtLogin;