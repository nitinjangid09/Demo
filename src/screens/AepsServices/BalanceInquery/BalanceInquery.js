import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Button from "../../../componets/Buttons/CommonButton/Button";

const BalanceEnquiryScreen = () => {
    const navigation = useNavigation(); // Ensure this is used within a valid navigation context

    const [mobileNumber, setMobileNumber] = useState("");
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [selectedBank, setSelectedBank] = useState("");



    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={require("../../../assets/Icons/back.png")}
                        style={styles.backArrow}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}>Balance Enquiry</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                <Text style={styles.label}>Mobile Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Mobile Number"
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                    keyboardType="phone-pad"
                />

                <Text style={styles.label}>Aadhaar Card Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Aadhaar Card Number"
                    value={aadhaarNumber}
                    onChangeText={setAadhaarNumber}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>Bank</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Bank"
                    value={selectedBank}
                    onChangeText={setSelectedBank}
                />
                <Button
                    title="Submit"
                    onPress={() => navigation.navigate("")}
                />
            </View>
        </View>
    );
};

export default BalanceEnquiryScreen;