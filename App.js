import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Auth,
  Cart,
  Checkout,
  Detail,
  Favorite,
  GetStarted,
  Home,
  Main,
  Orders,
  Payment,
  Search,
  Settings,
} from "./src/product";
import DrawerApp from "./src/product/Layout/DrawerApp";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer independent={true}>
          <Stack.Navigator
            initialRouteName="DrawerApp"
            screenOptions={{
              gestureEnabled: false,
              headerShown: false,
            }}
          >
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="Orders" component={Orders} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="Checkout" component={Checkout} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="DrawerApp" component={DrawerApp} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
