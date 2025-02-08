import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    keyboardAvoiding:{
      flex: 1,
    },
    content: {
        flex: 1,
        marginBottom:60
        
        
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
        backgroundColor: '#363636',
        alignItems: 'center',
      //  borderTopLeftRadius:10,
      //  borderTopRightRadius:10,
        borderColor: '#ededed',
        borderWidth: 1,
        
      
        
      },
      buttonText: {
        fontWeight:'bold',
        fontSize: 18,
        color: 'white'
      }
  });