import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/index';


const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  unAuthContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
    paddingVertical: 30,
  },

  submit: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: colors.backgroundColor,
  },
  subText: {
    color: colors.subText,
    //  fontFamily: 'Helvetica',
    fontSize: 15,
  },
  btn: {
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: colors.SignUp.btnBorderColor,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: colors.SignUp.btnBackgroundColor,
    paddingHorizontal: 19,
    paddingVertical: 11,

  },
  textBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
    fontSize: 14,
    // fontFamily: 'Helvetica',
  },
});

export default styles;

