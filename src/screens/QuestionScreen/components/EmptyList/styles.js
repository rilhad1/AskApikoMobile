import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/index';


const styles = StyleSheet.create({
  container: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    paddingVertical: 40,
  },
  text: {
    //  fontFamily: 'Helvetica',
    fontSize: 17,
    fontWeight: '700',
  },
  subText: {
    color: colors.subText,
    //  fontFamily: 'Helvetica',
    fontSize: 15,
  },
});

export default styles;

