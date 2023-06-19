import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RoundedButton from "../../components/RoundedButton";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        style={styles.imageBackgroud}
        source={require("../../../assets/chef.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../../../assets/user_image.png")}
        />
        <Text style={styles.logoText}>Add image</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Login</Text>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../assets/user.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Name"
            keyboardType="default"
          />
        </View>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../assets/my_user.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Surname"
            keyboardType="default"
          />
        </View>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../assets/email.png")}
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
            source={require("../../../assets/phone.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Phone"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../assets/password.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.formInput}>
          <Image
            style={styles.formIcon}
            source={require("../../../assets/confirm_password.png")}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder="Repeat Password"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="Sign up" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

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
    top: "5%",
    alignItems: "center",
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
    height: "70%",
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
