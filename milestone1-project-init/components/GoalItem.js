import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";

const GoalItem = (props) => {
  return (
    <View key={props.index} style={styles.goalTextContainer}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.index)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.item}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalTextContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 16,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
