import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";

interface Props {
  message: string;
}

const Toast = ({ message }: Props) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.delay(2000),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 8,
    padding: 10,
  },
  message: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Toast;
