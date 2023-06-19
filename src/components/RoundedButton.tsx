import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../theme/AppTheme";

interface Props {
  text: string;
  onPress: () => void;
}

const RoundedButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.roundedButton}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({
  roundedButton: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  textButton: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});
