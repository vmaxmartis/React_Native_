import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Auth, GetStarted, Main } from "./src/product";
import { View } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{
              gestureEnabled: true,
              headerShown: false,
            }}
          >
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Auth" component={Auth} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
