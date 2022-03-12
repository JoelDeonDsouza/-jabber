import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
  },
  leftContainer: {
    flexDirection: "row",
  },
  midContainer: {
    justifyContent: "space-around",
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 12,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#F9F9F9",
  },
  lastMessage: {
    fontSize: 14,
    color: "#93B5C6",
  },
  time: {
    fontSize: 14,
    color: "#93B5C6",
  },
});

export default styles;
