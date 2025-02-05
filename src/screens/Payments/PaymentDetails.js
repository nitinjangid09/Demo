import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const PaymentDetailsScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        
        <Text style={styles.headerText}>payment details</Text>
      </View>

      {/* Payment Card */}
      <View style={styles.paymentCard}>
        <View style={styles.cardTop}>
          <Text style={styles.cardText}>Prepaid • 54653454656</Text>
          <Text style={styles.cardAmount}>₹49.00</Text>
        </View>
        <Text style={styles.cardSubText}>Unlimited data • 1 day validity</Text>
      </View>

      {/* Select Offers */}
      <TouchableOpacity style={styles.offersCard}>
        <Text style={styles.offersText}>select offers, save more</Text>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>

      {/* Amount Details */}
      <View style={styles.amountDetails}>
        <Text style={styles.sectionTitle}>amount details</Text>
        <View style={styles.amountRow}>
          <Text style={styles.amountText}>prepaid recharge</Text>
          <Text style={styles.amountText}>₹49.00</Text>
        </View>
        <View style={styles.amountRow}>
          <Text style={styles.totalText}>total amount</Text>
          <Text style={styles.totalText}>₹49.00</Text>
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>
        your money is always safe{'\n'}
        <Text style={styles.footerSubText}>100% secure payments</Text>
      </Text>
     
      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <Text style={styles.bottomAmount}>₹49.00</Text>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>PROCEED TO PAY</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default PaymentDetailsScreen;