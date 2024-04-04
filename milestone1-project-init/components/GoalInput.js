import { useState } from "react";
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
  Modal,
  Button,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoaldHandler = () => {
    props.addGoaldHandler(enteredGoalText);
    setEnteredGoalText("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Your course goal!"
          value={enteredGoalText}
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          {/* <Pressable style={styles.button} onPress={addGoaldHandler}>
            <Text style={{ color: "white" }}>Add Goal</Text>
          </Pressable> */}
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={addGoaldHandler}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    borderWidth: 1,
    padding: 8,
    width: "100%",
    color: "#120438",
  },
  button: {
    // backgroundColor: "#0096FF",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingVertical: 12,
    // paddingHorizontal: 12,
    width: "30%",
    marginHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
