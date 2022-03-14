import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
  Fontisto,
  Entypo,
} from "@expo/vector-icons";

const InputBox = () => {
  const [message, setMessage] = useState("");
  const onRecoderPress = () => {
    console.log("RecoderON");
  };
  const onSendPress = () => {
    console.log(`Send:${message}`);
    //Message to backend
    setMessage("");
  };
  const onPress = () => {
    if (!message) {
      onRecoderPress();
    } else {
      onSendPress();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FontAwesome5 name="laugh-beam" size={24} color="#6FB2D2" />
        <TextInput
          placeholder={"Message..."}
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <Entypo
          name="attachment"
          size={24}
          color="#6FB2D2"
          style={styles.icon}
        />
        {!message && (
          <Fontisto
            name="camera"
            size={24}
            color="#D82148"
            style={styles.icon}
          />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.btnContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={26} color="#fff" />
          ) : (
            <MaterialIcons name="send" size={26} color="#fff" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputBox;
