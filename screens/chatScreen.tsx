import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
// import { RootTabScreenProps } from "../types";
import ChatListItem from "../components/ChatListItem";
import Colors from "../constants/Colors";
import chatRoom from "../data/ChatRoom";
export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <ChatListItem
        chatRoom={chatRoom[0]}
        //example data//
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#fff",
  },
  TextDesign: {
    color: Colors.dark.text,
  },
});
