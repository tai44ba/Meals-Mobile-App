import { StyleSheet, Text, View } from "react-native";

const List = ({ data }) => {
  return data.map((dataItem) => (
    <View key={dataItem} style={styles.itemContainer}>
      <Text style={styles.itemText}>{dataItem}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:'#e3c4a1',
        marginHorizontal:30,
        marginVertical:4,
        borderRadius:6
    },
    itemText:{
        color:'#3f2f25',
        textAlign:'center',
        padding:6
    }
});
