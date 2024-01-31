import "react-native-gesture-handler";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import List from "./src/screen/List";
import Detail from "./src/screen/Detail";
import Search from "./src/screen/Search";
import { SafeAreaView, StatusBar } from "react-native";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        animationEnabled: false,
        tabBarIndicatorStyle: { backgroundColor: "teal" },
      }}
    >
      <Tab.Screen
        name="Movies"
        options={{
          tabBarLabel: "Movies",
          tabBarLabelStyle: { textTransform: undefined },
        }}
        component={List}
        initialParams={{ type: "movie" }}
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
        }}
        component={List}
        initialParams={{ type: "tv" }}
      />
    </Tab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ animationEnabled: false }}>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerBackTitle: "Back to List",
          title: "",
          detachPreviousScreen: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <SafeAreaView style={{ flex: 1 }}>
        <GluestackUIProvider config={config}>
          <StackNavigator />
        </GluestackUIProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
}
