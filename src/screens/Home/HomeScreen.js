import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AEPSServices from "../Services/AEPS/AEPSServices";
import BBPSServices from "../Services/BBPS/BBPSServices";
import Services from "../Services/Services/Services";
import styles from "./styles";



const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../assets/Icons/logo.png")} style={styles.logo} />
                <TouchableOpacity onPress={() => navigation.navigate("PROFILE")}>
                    <Image source={require("../../assets/Icons/user.png")} style={styles.userIcon} />
                </TouchableOpacity>
            </View>

            {/* Wallet Section */}
            <View style={styles.wallet}>
                <View style={styles.walletContainer}>
                    <Text style={styles.walletText}> Aeps</Text>
                    <Image source={require("../../assets/Icons/wallet.png")} style={styles.walletIcon} />
                    <Text>₹ 300</Text>
                </View>
                <View style={styles.walletContainer}>
                    <Text style={styles.walletText2}> Main</Text>
                    <Image source={require("../../assets/Icons/wallet.png")} style={styles.walletIcon} />
                    <Text>₹ 300</Text>
                </View>
            </View>

            {/* Banner Section */}
            <ScrollView>
                <View>
                    <FlatList
                        style={styles.banner}
                        data={[
                            { id: '1', src: require('../../assets/Images/adds.png') },
                            { id: '2', src: require('../../assets/Images/adds.png') },
                            { id: '3', src: require('../../assets/Images/adds.png') },
                        ]}
                        renderItem={({ item }) => (
                            <Image source={item.src} style={styles.adds} />
                        )}
                        keyExtractor={(item) => item.id}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                {/* Additional Section */}
                <View style={styles.serviceText} >
                        <Text style={styles.textService}>Services</Text>
                    </View>
                    <View style={styles.servicesContainer}>
                        <Services />
                    </View>
                <View >
                    <View style={styles.serviceText} >
                        <Text style={styles.textService}>AEPS Services</Text>
                    </View>
                    <View style={styles.servicesContainer}>
                        <AEPSServices />
                    </View>
                    <View style={styles.serviceText} >
                        <Text style={styles.textService}>BBPS Services</Text>
                    </View>
                    <View style={styles.servicesContainer}>
                        <BBPSServices />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

    