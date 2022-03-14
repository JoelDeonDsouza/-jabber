import React from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./style";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NewMessageBTN = () => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("Contacts");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Entypo name="new-message" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default NewMessageBTN;
