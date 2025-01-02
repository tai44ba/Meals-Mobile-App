import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import IconButton from "../components/IconButton";
import MealDetail from "../components/MealDetail";
import List from "../components/mealDetails/List";
import Subtitle from "../components/mealDetails/subTitle";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route , navigation}) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((mael) => mael.id === mealId);

  const headerPressedHandler = () => {
    console.log('pressed')
  }

  useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight:()=>{
            return <IconButton onPress={headerPressedHandler} color='white' icon='star' />
        }
    })
  },[navigation,headerPressedHandler])

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetail
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginBottom: 40,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer:{
    alignItems:'center'
  },
  listContainer: {
    width: "80%",
  },
});
