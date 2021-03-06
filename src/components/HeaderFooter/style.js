import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    height: height * 0.07,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
  },
  footerContainer: {
    flex: 0.7,
    backgroundColor: 'white',
    borderTopColor: '#E3E5E9',
    borderTopWidth: 2,
    justifyContent: 'center',
  },
  footerSubContainer: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  headerHeading: {fontSize: width * 0.04},
  bodyContainer: {flex: 8.2},
});
