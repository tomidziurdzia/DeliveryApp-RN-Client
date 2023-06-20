import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import CustomTextInput from "../../components/CustomTextInput";
import RoundedButton from "../../components/RoundedButton";
import useViewModel from "./ViewModel";
import styles from "./Styles";

const RegisterScreen = () => {
  const {
    name,
    lastname,
    email,
    phone,
    password,
    confirmPassword,
    onChange,
    register,
  } = useViewModel();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image
        style={styles.imageBackgroud}
        source={require("../../../../assets/chef.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../../../../assets/user_image.png")}
        />
        <Text style={styles.logoText}>Add image</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Login</Text>
        <CustomTextInput
          placeholder="Name"
          keyboardType="default"
          image={require("../../../../assets/user.png")}
          property="name"
          onChangeText={onChange}
          value={name}
        />

        <CustomTextInput
          placeholder="Lastname"
          keyboardType="default"
          image={require("../../../../assets/my_user.png")}
          property="lastname"
          onChangeText={onChange}
          value={lastname}
        />

        <CustomTextInput
          placeholder="admin@admin.com"
          keyboardType="email-address"
          image={require("../../../../assets/email.png")}
          property="email"
          onChangeText={onChange}
          value={email}
        />

        <CustomTextInput
          placeholder="12345678"
          keyboardType="numeric"
          image={require("../../../../assets/phone.png")}
          property="phone"
          onChangeText={onChange}
          value={phone}
        />

        <CustomTextInput
          placeholder="*********"
          keyboardType="default"
          image={require("../../../../assets/password.png")}
          property="password"
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />

        <CustomTextInput
          placeholder="*********"
          keyboardType="default"
          image={require("../../../../assets/confirm_password.png")}
          property="confirmPassword"
          onChangeText={onChange}
          value={confirmPassword}
          secureTextEntry={true}
        />
        <View style={{ marginTop: 30 }}>
          <RoundedButton text="Sign up" onPress={() => register()} />
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
