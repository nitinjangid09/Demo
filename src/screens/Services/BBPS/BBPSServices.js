import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import styles from "./styles";

const BBPSServices = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => setModalVisible(false);

  // Main services for the grid
  const services = [
    { title: "DTH", icon: require("../../../assets/Icons/DTH.png"), screen: "CLAIM_OTTS" },
    { title: "Landline", icon: require("../../../assets/Icons/Landline.png"), screen: "ROAMING" },
    { title: "Water", icon: require("../../../assets/Icons/Water.png"), screen: "ADD_CONNECTION" },
  
];

  // Additional services to be displayed in the modal
  const modalServices = [
    { title: "Gas", icon: require("../../../assets/Icons/Gas.png"), screen: "CHANNELS" },
    { title: "Fastag", icon: require("../../../assets/Icons/Fastag.png"), screen: "UPGRADE" },
    { title: "Electricity", icon: require("../../../assets/Icons/Electricity.png"), screen: "ELECTRICITY_BILL" },
    { title: "Broadband", icon: require("../../../assets/Icons/Broadband.png"), screen: "BROADBAND" },
    { title: "Insurance", icon: require("../../../assets/Icons/Insurance.png"), screen: "INSURANCE" },
    { title: "Subscription", icon: require("../../../assets/Icons/Subscription.png"), screen: "SUBSCRIPTION" },
  ];

  const ServiceItem = ({ icon, title, screen, isMore }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        if (isMore) {
          setModalVisible(true); // Open modal for "More"
        } else if (screen) {
          navigation.navigate(screen); // Navigate to specified screen
        }
      }}
    >
      <View style={styles.iconWrapper}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Main Service Grid */}
      <View style={styles.servicesWrapper}>
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            title={service.title}
            screen={service.screen}
          />
        ))}
        {/* "More" button */}
        <ServiceItem
          icon={require("../../../assets/Icons/more.png")}
          title="More"
          isMore={true}
        />
      </View>

      {/* Modal for Additional Services */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            {/* Close Button */}
            <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
              <Text style={styles.modalCloseButtonText}>X</Text>
            </TouchableOpacity>

            {/* Header Text */}
            <Text style={styles.modalHeaderText}>Additional Services</Text>

            {/* Additional Services Grid */}
            <View style={styles.servicesWrapper}>
              {modalServices.map((service, index) => (
                <ServiceItem
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  screen={service.screen}
                />
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BBPSServices;