import React from "react";
import HomeScreen from "./src/views/home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./src/views/register/Register";

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          options={{
            headerShown: true,
          }}
          name="RegisterScreen"
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
