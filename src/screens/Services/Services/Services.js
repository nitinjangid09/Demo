import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image, } from "react-native";
import styles from "./styles";

const Services = () => {
    const navigation = useNavigation();

    const services = [
        { title: "Recharge", icon: require("../../../assets/Icons/recharge.png"), screen: "RECHARGE" },
        { title: "Electricity Bills", icon: require("../../../assets/Icons/Electricity.png"), screen: "ElectricityBills" },
        { title: "DMT LogIn", icon: require("../../../assets/Icons/pay_bills.png"), screen: "DMTLogin" },
        { title: "Pay Out", icon: require("../../../assets/Icons/payout.png"), screen: "PayOut" },

    ];

    const ServiceItem = ({ icon, title, screen,  }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
               
                    navigation.navigate(screen); // Navigate to specified screen
                
            }}
        >
            <View style={styles.iconWrapper}>
                <Image source={icon} style={styles.icon} />
            </View>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.servicesWrapper}>
                {services.map((service, index) => (
                    <ServiceItem
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        screen={service.screen}
                    />
                ))}
                {/* "More" button */}
              
            </View>
        </View>
    );
};

export default Services;

