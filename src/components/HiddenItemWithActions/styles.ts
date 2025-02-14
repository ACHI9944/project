import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    hiddenContainer: {
      height:70,
      flexDirection: 'row', 
      justifyContent: 'flex-end', 
      alignItems: 'center',
      borderRadius: 10,
    },
    hiddenButton: {
      width: 50, 
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 15,
      borderRadius: 10,
      marginLeft: 5
    },
    closeButton: {
      backgroundColor: '#d3d3d3', 
    },
    deleteButton: {
      backgroundColor: '#e74c3c', 
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 14,
    },
  });