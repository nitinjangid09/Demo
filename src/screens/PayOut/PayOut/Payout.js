import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Dropdown from "../../../componets/Dropdown/Dropwon";

const PayoutScreen = () => {
  const navigation = useNavigation();
  const [selectedAccount, setSelectedAccount] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const accountOptions = [
    { label: "Account 1", value: "account1" },
    { label: "Account 2", value: "account2" },
  ];

  const handleSelectMethod = (method) => setSelectedMethod(method);

  const handleSendOtp = () => setIsModalVisible(true);

  const closeModal = () => setIsModalVisible(false);

  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

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
        <Text style={styles.headerText}>Pay Out</Text>
      </View>

      {/* Payout Form */}
      <View style={styles.form}>
        {/* Mobile Number Input */}
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Mobile Number"
          keyboardType="phone-pad"
          placeholderTextColor="#999"
        />

        {/* Select Account */}
        <Text style={styles.label}>Account</Text>
        <Dropdown
          visible={isDropdownVisible}
          options={accountOptions}
          selectedValue={
            accountOptions.find((option) => option.value === selectedAccount)
              ?.label
          }
          onSelect={(value) => setSelectedAccount(value)}
          toggleDropdown={toggleDropdown}
        />

        {/* Amount Input */}
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          keyboardType="numeric"
          placeholderTextColor="#999"
        />

        {/* Payment Method Selection */}
        <View style={styles.paymentMethods}>
          {["IMPS", "NEFT"].map((method) => (
            <TouchableOpacity
              key={method}
              style={[
                styles.paymentButton,
                selectedMethod === method && styles.selectedPaymentButton,
              ]}
              onPress={() => handleSelectMethod(method)}
            >
              <Text style={styles.paymentButtonText}>{method}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleSendOtp}>
          <Text style={styles.buttonText}>SEND OTP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.primaryButton, styles.secondaryButton]}
          onPress={() => navigation.navigate("PayOutAccount")}
        >
          <Text style={styles.buttonText}>Add Account</Text>
        </TouchableOpacity>
      </View>

      {/* OTP Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Enter OTP</Text>
              <TouchableOpacity onPress={closeModal}>
                <Text style={styles.closeButton}>X</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              style={styles.modalInput}
              placeholder="Enter OTP"
              keyboardType="numeric"
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.primaryButton} onPress={closeModal}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PayoutScreen;