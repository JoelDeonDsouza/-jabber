import React from "react";
import { View, Text, Image } from "react-native";
import { ChatRoom } from "../../types";
import styles from "./style";

export type ChatListItemProps = {
  chatRoom: ChatRoom;
};

const ChatListItem = (props: ChatListItemProps) => {
  const { chatRoom } = props;
  const user = chatRoom.users[0];
  return (
    <View>
      <Image style={styles.avatar} source={{ uri: user.imageUri }} />
      <Text>{user.name}</Text>
      <Text>{chatRoom.lastMessage.content}</Text>
      <Text>{chatRoom.lastMessage.createdAt}</Text>
    </View>
  );
};

export default ChatListItem;
