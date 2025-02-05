import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Switch,
    Platform,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './styles';

export default function ElectricityBillScreen() {
    const navigation = useNavigation();

    const [isReminderEnabled, setIsReminderEnabled] = useState(false);

    const toggleSwitch = () => setIsReminderEnabled((previousState) => !previousState);

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}>
                    <Image source={require("../../../assets/Icons/back.png")} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Electricity</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                <Text style={styles.label}>Select biller</Text>
                <View>
                    <TextInput style={styles.input} placeholder="Bills" />
                </View>

                <Text style={styles.label}>K Number</Text>
                <TextInput style={styles.input} placeholder="Enter K Number" />
                <View style={styles.reminderContainer}>
                    <Switch
                        value={isReminderEnabled}
                        onValueChange={toggleSwitch}
                        thumbColor={isReminderEnabled ? '#FFCC00' : '#CCC'}
                        trackColor={{ false: '#DDD', true: '#FFCC00' }}
                    />
                    <Text style={styles.reminderText}>Remind me when my bill is due</Text>
                </View>

                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.ButtonText}>Save and Continue</Text>
                </TouchableOpacity>

                <Text style={styles.noteText}>
                    The payment will reflect at biller's end after 2-3 working days.
                </Text>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.footerText}>Help & FAQs</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

