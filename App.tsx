import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  Text,
  TextInput,
  Button,
} from "react-native";

import React, { useState } from "react";
import RoundedButton from "./src/components/RoundedButton";
import Toast from "./src/components/Toast";

const App = () => {
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = () => {
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 2000);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        style={styles.imageBackgroud}
        source={require("./assets/chef.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={require("./assets/logo.png")} />
        <Text style={styles.logoText}>Delivery</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Login</Text>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("./assets/email.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="admin@admin.com"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("./assets/password.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="**********"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="Sign in" onPress={showToast} />
        </View>

        <View style={styles.formRegister}>
          <Text>You don't have account</Text>
          <Text style={styles.RegisterText}>Register</Text>
        </View>
      </View>
      {toastVisible && <Toast message="Esto es un mensaje de notificación" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageBackgroud: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "30%",
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "15%",
    display: "flex",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: "#fff",
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  form: {
    width: "100%",
    height: "40%",
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 20,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },
  formRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  RegisterText: {
    color: "orange",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default App;
