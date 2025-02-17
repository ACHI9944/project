import {Dimensions, StyleSheet} from 'react-native';
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = SCREEN_WIDTH * 0.75;
  const SIDE_MARGIN = 24

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingVertical: 15,
  },
  flatlist: {
    flexGrow:1,
    justifyContent: 'center',
    
  },
  banner: {
    width: ITEM_WIDTH,
    height: 180,
    backgroundColor: '#0055A4', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft:12
  },
  bannerleft:{
    marginLeft: SIDE_MARGIN
  },
  bannerRight: {
    marginRight: SIDE_MARGIN
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
