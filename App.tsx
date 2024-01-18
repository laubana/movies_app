import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import List from "./src/screen/List";
import Detail from "./src/screen/Detail";
import Search from "./src/screen/Search";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const NestedStack = (type: "movies" | "shows") => {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen
        name="List"
        component={List}
        options={{ headerShown: false }}
        initialParams={{ type: type }}
      />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator initialRouteName="Movies">
        <Tab.Screen
          name="Movies"
          options={{
            tabBarLabel: "Movies",
            tabBarLabelStyle: { textTransform: undefined },
          }}
        >
          {() => NestedStack("movies")}
        </Tab.Screen>
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
        >
          {() => NestedStack("shows")}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
