import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategorysScreen from "./screen/CategorysScreen";
import MealsOverviewScreen from "./screen/MealsOverviewScreen";
import MealDetailScreen from "./screen/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:'#351401'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor:'#3f2f25'}
        }}>
          <Stack.Screen name="MealsCategories" component={CategorysScreen} options={{
            title: 'All Categories'
          }} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
