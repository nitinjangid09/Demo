import React from "react";
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const MoneyTransfer = () => {
    const navigation = useNavigation();

    const beneficiaries = [
        { id: "1", name: "Nitin", account: "1234567890", bank: "ABC Bank" },
        { id: "2", name: "Amit", account: "9876543210", bank: "XYZ Bank" },
        { id: "3", name: "Ravi", account: "1122334455", bank: "DEF Bank" },
        { id: "4", name: "Vijay", account: "3344556677", bank: "GHI Bank" },
        { id: "5", name: "Ravi", account: "1122334455", bank: "DEF Bank" },
        { id: "6", name: "Ravi", account: "1122334455", bank: "DEF Bank" },
        { id: "7", name: "Ravi", account: "1122334455", bank: "DEF Bank" },
        { id: "8", name: "Ravi", account: "1122334455", bank: "DEF Bank" },
        { id: "9", name: "Ravi", account: "1122334455", bank: "DEF Bank" },
        { id: "10", name: "Ravi", account: "1122334455", bank: "DEF Bank" },
    ];

    const renderBeneficiary = ({ item, index }) => {
        const backgroundColor = index % 2 === 0 ? "#F9FAFB" : "#E5E7EB";
        return (
            <View style={[styles.form, { backgroundColor }]}>
                <View>
                    <Text style={styles.beneficiaryName}>{item.name}</Text>
                    <Text style={styles.beneficiaryDetails}>{item.account}</Text>
                    <Text style={styles.beneficiaryDetails}>{item.bank}</Text>
                </View>
                <TouchableOpacity
                    style={styles.transferButton}
                    onPress={() => navigation.navigate("Transfer")}
                >
                    <Text style={styles.transferButtonText}>Transfer</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../../assets/Icons/back.png")} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Money Transfer</Text>
            </View>

            {/* Balance Information */}
            <View style={styles.balanceContainer}>
               
                <View>
                    <Text style={styles.balanceLimit}>Limit: ₹50,000</Text>
                    <Text style={styles.mobileNumber}>Number: 9876543210</Text>
                </View>
            </View>

            {/* Beneficiaries List */}
            <FlatList
                data={beneficiaries}
                renderItem={renderBeneficiary}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.beneficiaryList}
            />

            {/* Add Beneficiary Button */}
            <TouchableOpacity
                style={styles.Button}
                onPress={() => navigation.navigate("AddBeneficial")}
            >
                <Text style={styles.ButtonText}>Add Beneficiary</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default MoneyTransfer;

