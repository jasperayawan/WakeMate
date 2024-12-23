import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AlarmClock, Clock, WatchIcon } from "lucide-react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ClockScreen from "../screens/ClockScreen";
import AlarmScreen from "../screens/AlarmScreen";
import StopwatchScreen from "../screens/StopwatchScreen";

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#f8f8f8" },
      }}
    >
      <Tab.Screen
        name="Clock"
        component={ClockScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Clock size={24} color={focused ? "#000" : "rgba(0,0,0,0.5)"} />
          ),
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={AlarmScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AlarmClock
              size={24}
              color={focused ? "#000" : "rgba(0,0,0,0.5)"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stopwatch"
        component={StopwatchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <WatchIcon
              size={24}
              color={focused ? "#000" : "rgba(0,0,0,0.5)"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
