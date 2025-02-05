import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import styles from './styles';

// Dummy Data
const electricityBillers = [
  {
    state: 'Andhra Pradesh',
    billers: [
      {
        name: 'Andhra Pradesh Central Power Distribution Corporation Limited',
      },
      {
        name: 'Eastern Power Distribution Co Ltd (APEPDCL)',
      },
      {
        name: 'Southern Power Distribution Co Ltd (APSPDCL)',
      },
      {
        name: 'TTD Electricity',
      },
    ],
  },
  {
    state: 'Arunachal Pradesh',
    billers: [
      {
        name: 'Department of Power, Government of Arunachal Pradesh',
      },
      {
        name: 'Department of Power, Government of Arunachal Pradesh - Prepaid',
      },
    ],
  },
  {
    state: 'Assam',
    billers: [],
  },
];

export default function ElectricityScreen() {
  const navigation = useNavigation();

  const renderBillerItem = ({ item }) => (
    <TouchableOpacity 
    onPress={() => navigation.goBack()}
    style={styles.billerItem}>
      <Image source={require("../../../assets/Images/bills.png")} style={styles.billerLogo} />
      <Text style={styles.billerText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderStateSection = ({ item }) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.stateText}>{item.state}</Text>
      {item.billers.length > 0 ? (
        <FlatList
          data={item.billers}
          renderItem={renderBillerItem}
          keyExtractor={(biller) => biller.name}
        />
      ) : (
        <Text />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity >
        <Image source={require("../../assets/Icons/back.png")}  style={{height:20,width:20}} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Electricity</Text>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search by biller or state/union territory"
      />

      {/* State and Billers */}
      <FlatList
        data={electricityBillers}
        renderItem={renderStateSection}
        keyExtractor={(item) => item.state}
      />
    </View>
  );
}

