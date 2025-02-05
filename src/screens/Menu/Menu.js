import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const Menu = () => {
  return (
    <ScrollView style={styles.container}>
   

      {/* Menu */}
      <View style={styles.menu}>
        <MenuItem title="My Active Services" />
        <MenuItem title="New Connections" subtitle="Buy new Postpaid, Prepaid, Wi-Fi & more" />
        <MenuItem title="Airtel Financial Services" subtitle="Apply for instant loans, credit cards, FDs" />
        <MenuItem title="Recharge & Pay Bills" subtitle="Pay for mobile, electricity, FASTag & more" />
        <MenuItem title="Airtel UPI" subtitle="Make fast & secure payments" />
        <MenuItem title="Set Hellotunes" subtitle="Set your favourite tunes for your callers" />
        <MenuItem title="Refer and Earn" subtitle="Get ₹300 discount coupon on each referral" />
        <MenuItem title="Subscriptions" subtitle="Manage OTT, books, music subscriptions" />
      </View>
    </ScrollView>
  );
};

const MenuItem = ({ title, subtitle }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View>
      <Text style={styles.menuTitle}>{title}</Text>
      {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
    </View>
  </TouchableOpacity>
);


export default Menu;