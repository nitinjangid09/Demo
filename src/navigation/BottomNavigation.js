import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Drawer from "../screens/Drawer";
import HomeScreen from "../screens/Home/HomeScreen";


const Tab = createBottomTabNavigator(); // Ensure Tab is capitalized

function BottomNavigation  () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen name="Menu" component={Drawer} />
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;