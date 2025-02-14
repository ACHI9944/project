import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: 16,
      marginBottom: 8,
      borderRadius: 10,
      height: 70,
    },
    profilePic: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    email: {
      fontSize: 14,
      color: 'gray',
    },
  });