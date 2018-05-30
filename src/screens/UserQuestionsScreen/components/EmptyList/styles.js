import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingTop: 200,
  },
  text: {
    // fontFamily: 'Helvetica',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 8,
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
    marginTop: 20,
    backgroundColor: colors.SignUp.btnBackgroundColor,
    paddingHorizontal: 19,
    paddingVertical: 10,

  },
  textBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.white,
    fontSize: 14,
  },
});

export default styles;

