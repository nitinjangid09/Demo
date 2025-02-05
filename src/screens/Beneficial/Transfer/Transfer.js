import React, { useState } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Modal 
} from "react-native";
import styles from "./styles";

const Transfer = () => {
    const [amount, setAmount] = useState("");
    const [method, setMethod] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const handleTransfer = () => {
        if (!amount || !method) {
            alert("Please fill out all fields.");
            return;
        }
        setModalVisible(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Transfer Amount</Text>

            {/* Input for Amount */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Amount</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter amount"
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                />

                {/* Input for Transfer Method */}
                <Text style={styles.label}>Method</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Method"
                    value={method}
                    onChangeText={setMethod}
                />

                {/* Transfer Button */}
                <TouchableOpacity style={styles.button} onPress={handleTransfer}>
                    <Text style={styles.buttonText}>Transfer</Text>
                </TouchableOpacity>
            </View>

            {/* Modal for OTP */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalBox}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>Enter OTP</Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.buttonText2}>X</Text>
                            </TouchableOpacity>
                        </View>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Enter OTP"
                            keyboardType="numeric"
                            placeholderTextColor="#999"
                        />
                        <TouchableOpacity onPress={() => setModalVisible(false)}
                            style={styles.sendOtpButton}
                            >
                                <Text style={styles.sendOtpText}>Submit</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Transfer