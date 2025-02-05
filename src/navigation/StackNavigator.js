import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import ProfileScreen from '../screens/Profile/Profile';
import RechargeScreen from '../screens/Recharge/RechargeScreen';
import ElectricityBillScreen from '../screens/Electricity/ElectricityDetails/ElectricityDetails';
import BalanceEnquiryScreen from '../screens/AepsServices/BalanceInquery/BalanceInquery';
import MiniStatementScreen from '../screens/AepsServices/statement/MiniStatements';
import MoneyTransfer from '../screens/Beneficial/MoneyTransfer/MoneyTransfer';
import AddBeneficial from '../screens/Beneficial/AddBenificial/AddBeneficial';
import Transfer from '../screens/Beneficial/Transfer/Transfer';
import PaymentDetailsScreen from '../screens/Payments/PaymentDetails';
import HomeScreen from '../screens/Home/HomeScreen';
import TransactionScreen from '../screens/Transcations/Transaction';
import Menu from '../screens/Menu/Menu';
import PayOutAccount from '../screens/PayOut/payAccount/PayOutAccount';
import PayoutScreen from '../screens/PayOut/PayOut/Payout';
import CashWithdrwal from '../screens/AepsServices/Withdraw/CashWithdraw';
import DmtLogin from '../screens/Dmt/DmtLogin/DmtLogin';
import UserDmtKYC from '../screens/Dmt/UserDmt/UserDmtKyc';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconSource;

          if (route.name === 'Home') {
            iconSource = require('../assets/Images/home.png');
          } else if (route.name === 'Menu') {
            iconSource = require('../assets/Images/menu.png');
          } else if (route.name === 'History') {
            iconSource = require('../assets/Images/transaction.png');
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: '#8e8e93',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="History" component={TransactionScreen} />
    </Tab.Navigator>
  );
};

// Stack Navigator
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={BottomNavigation} />
      <Stack.Screen name="PROFILE" component={ProfileScreen} />
      <Stack.Screen name="RECHARGE" component={RechargeScreen} />
      <Stack.Screen name="ElectricityBills" component={ElectricityBillScreen} />
      <Stack.Screen name="BalanceInquery" component={BalanceEnquiryScreen} />
      <Stack.Screen name="MiniStatement" component={MiniStatementScreen} />
      <Stack.Screen name="PayOut" component={PayoutScreen} />
      <Stack.Screen name="CashWithdrwal" component={CashWithdrwal} />
      <Stack.Screen name="DMTLogin" component={DmtLogin} />
      <Stack.Screen name="UserDmtKyc" component={UserDmtKYC} />
      <Stack.Screen name="MoneyTransfer" component={MoneyTransfer} />
      <Stack.Screen name="AddBeneficial" component={AddBeneficial} />
      <Stack.Screen name="Transfer" component={Transfer} />
      <Stack.Screen name="PayOutAccount" component={PayOutAccount} />
      <Stack.Screen name="PaymentDetails" component={PaymentDetailsScreen} />
    </Stack.Navigator>
  );
};

// Main App Navigation
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;