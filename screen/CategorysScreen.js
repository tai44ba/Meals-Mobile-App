import { FlatList, StyleSheet } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (itemData) => {
  return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategorysScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategorysScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1
    }
})
