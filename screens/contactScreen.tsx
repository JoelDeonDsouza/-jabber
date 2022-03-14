import { FlatList, StyleSheet } from "react-native";
import { View } from "../components/Themed";
// import { RootTabScreenProps } from "../types";
import ContactListItem from "../components/ContactListItem";
import users from "../data/Users";
// import NewMessageBTN from "../components/NewMessageBTN";

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={users}
        renderItem={({ item }) => (
          <ContactListItem user={item} keyExtractor={(item) => item.id} />
        )}
      />
      {/* <NewMessageBTN /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
  },
});
