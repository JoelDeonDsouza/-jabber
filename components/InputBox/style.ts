import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 10,
  },
  main: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#F1F6F9",
    padding: 10,
    borderRadius: 12,
    flex: 1,
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  btnContainer: {
    backgroundColor: "#D82148",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});

export default styles;
