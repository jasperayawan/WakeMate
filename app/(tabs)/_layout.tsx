import React, { useState } from "react";
import App from ".";
import TrialCard from "@/components/TrialCard";
import { View } from "react-native";


export default function TabLayout() {
  const [isTrialVisible, setTrialVisible] = useState(true);

  const handleClose = () => {
    setTrialVisible(false);
  }

  return (
    <View style={{ flex: 1 }}>
      <TrialCard visible={isTrialVisible} onClose={handleClose} />
      <App />
    </View>
  )
}
