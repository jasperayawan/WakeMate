import { X } from "lucide-react-native";
import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

const { height } = Dimensions.get("window");

interface TrialCardProps {
  visible: boolean;
  onClose: () => void;
}

const TrialCard: React.FC<TrialCardProps> = ({ visible, onClose }) => {
  const translateY = useSharedValue(-height);

  useEffect(() => {
    if (visible) {
      translateY.value = withTiming(0, { duration: 500 });
    } else {
      translateY.value = withTiming(-height, { duration: 500 });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Animated.View style={[styles.card, animatedStyle]}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>3 Days Free Trial</Text>
        <Text style={styles.description}>
          Enjoy all premium features for 3 days. No credit card required.
        </Text>
        <X style={styles.close} color='#000' onPress={onClose} />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    margin: 20,
    zIndex: 1000,
  },
  innerContainer: {
    position: "relative",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  close: {
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export default TrialCard;