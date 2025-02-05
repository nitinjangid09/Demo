import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import styles from "./styles";

const ProfileScreen = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>profile</Text>
            </View>

            {/* Profile Info Card */}
            <View style={styles.profileCard}>
                <View style={styles.profileRow}>
                    <View style={styles.avatarContainer}>
                        <Image source={require("../../assets/Icons/avatar.png")} style={styles.avatar} />
                    </View>
                    <View style={styles.profileDetails}>
                        <Text style={styles.name}>Aashish Saini</Text>
                        <Text style={styles.info}>6350580877</Text>
                        <Text style={styles.info}>aashishsaini0211@gmail.com</Text>
                    </View>
                </View>
            </View>

            {/* Personal Details */}
            <View style={styles.detailsSection}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>PERSONAL DETAILS</Text>
                    <TouchableOpacity>
                        <Text style={styles.editText}>edit</Text>
                    </TouchableOpacity>
                </View>
                <TextInput style={styles.input} placeholder="Enter Full Name" />
                <TextInput style={styles.input} placeholder="Enter Gender" />
                <TextInput style={styles.input} placeholder="Enter Email Address" />
            </View>

            {/* Address Details */}
            <View style={styles.detailsSection}>
                <Text style={styles.sectionTitle}>Billing Address</Text>
                <TextInput
                    
                    multiline />
<View style={styles.divider} />
                    <Text style={styles.sectionTitle}>Correspondence Address</Text>
                <TextInput
                    
                    multiline
                />
            </View>
        </ScrollView>
    );
};

export default ProfileScreen;

