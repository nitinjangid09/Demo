import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const AEPSServices = () => {
    const navigation = useNavigation();

    const services = [
        { title: "Mini Statement", icon: require("../../../assets/Icons/ministatement.png"), screen: "MiniStatement" },
        { title: "Cash Withdrawal", icon: require("../../../assets/Icons/cashwithdrawal.png"), screen: "CashWithdrwal" },
        { title: "Balance Inquiry", icon: require("../../../assets/Icons/BalanceInquery.png"), screen: "BalanceInquery" },
        { title: "Aadhaar Pay", icon: require("../../../assets/Icons/AadhaarPay.png"), screen: "PaymentDetails" },
    ];

    const ServiceItem = ({ icon, title, screen }) => (
        <TouchableOpacity 
            style={styles.itemContainer}
            onPress={() => navigation.navigate(screen)}
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
            </View>
        </View>
    );
};

export default AEPSServices;

