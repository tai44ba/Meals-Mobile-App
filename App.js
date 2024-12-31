import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategorysScreen from "./screen/CategorysScreen";

export default function App() {
  return (
    <>
      <StatusBar style='light ' />
      <CategorysScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
