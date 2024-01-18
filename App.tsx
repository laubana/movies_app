import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import List from "./src/screen/List";
import Detail from "./src/screen/Detail";
import Search from "./src/screen/Search";
import { SafeAreaView, StatusBar, Text } from "react-native";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Movies">
      <Tab.Screen
        name="Movies"
        options={{
          tabBarLabel: "Movies",
          tabBarLabelStyle: { textTransform: undefined },
        }}
        component={List}
        initialParams={{ type: "movies" }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search Results",
          tabBarLabelStyle: { textTransform: undefined },
        }}
      />
      <Tab.Screen
        name="Shows"
        options={{
          tabBarLabel: "TV Shows",
          tabBarLabelStyle: { textTransform: undefined },
          tabBarIndicatorStyle: { backgroundColor: "steelblue" },
        }}
        component={List}
        initialParams={{ type: "shows" }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerBackTitle: "Back to List" }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}
