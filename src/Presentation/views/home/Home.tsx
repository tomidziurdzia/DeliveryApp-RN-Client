import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StatusBar, Text, View } from "react-native";
import RoundedButton from "../../components/RoundedButton";
import Toast from "../../components/Toast";
import { TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import useViewModel from "./ViewModel";
import CustomTextInput from "../../components/CustomTextInput";
import styles from "./Styles";

const HomeScreen = () => {
  const { email, password, onChange } = useViewModel();
  const [toastVisible, setToastVisible] = React.useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
        source={require("../../../../assets/chef.jpg")}
      />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../../../../assets/logo.png")}
        />
        <Text style={styles.logoText}>Delivery</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>Login</Text>
        <CustomTextInput
          image={require("../../../../assets/email.png")}
          placeholder="admin@admin.com"
          keyboardType="email-address"
          property="email"
          onChangeText={onChange}
          value={email}
        />

        <CustomTextInput
          image={require("../../../../assets/password.png")}
          placeholder="***********"
          keyboardType="default"
          property="password"
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />

        <View style={{ marginTop: 30 }}>
          <RoundedButton text="Sign in" onPress={showToast} />
        </View>

        <View style={styles.formRegister}>
          <Text>You don't have account</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={styles.RegisterText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      {toastVisible && <Toast message="Esto es un mensaje de notificación" />}
    </View>
  );
};

export default HomeScreen;
