import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  servicesWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemContainer: {
    width: "25%",
    marginVertical: 10,
    alignItems: "center",
  },
  iconWrapper: {
    height: 50,
    padding: 5,
  },
  icon: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 12,
    color: "#555",
    textAlign: "center",
    marginTop: 10,
  },
  modalWrapper: {
    flex: 1,
    justifyContent:"flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    position: "relative",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
  },
  modalHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  modalCloseButton: {
    position: "absolute",
    top: 15,
    right: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
  },
  modalCloseButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default styles;