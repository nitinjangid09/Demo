import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Button from "../../../componets/Buttons/CommonButton/Button";

const { width } = Dimensions.get("window"); // Get screen width for responsive styling

const MiniStatementScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require("../../../assets/Icons/back.png")} style={styles.backArrow} />
                </TouchableOpacity>
                <Text style={styles.headerText} >Mini Statement</Text>

            </View>

            {/* Form */}
            <View style={styles.form}>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.Text}>Two Factor Authentication</Text>
                </View>
                <TextInput
                    style={styles.input}
                   
                />
             
             <Button
                    title="Submit"
                    onPress={() => navigation.navigate("")}
                />
            </View>
        </View>
    );
};

export default MiniStatementScreen;

