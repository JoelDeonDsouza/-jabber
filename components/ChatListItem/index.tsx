import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import moment from "moment";
import { ChatRoom } from "../../types";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const navigation = useNavigation();
  const user = chatRoom.users[1];
  const onClick = () => {
    // console.log(`Clicked ${user.name}`);
    navigation.navigate("ChatRoom", { id: chatRoom.id });
  };
  return (
    <TouchableWithoutFeedback onPress={onClick}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image style={styles.avatar} source={{ uri: user.imageUri }} />
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text numberOfLines={1} style={styles.lastMessage}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
        <Text style={styles.time}>
          {moment(chatRoom.lastMessage.createdAt).format("DD/MM/LT")}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;
