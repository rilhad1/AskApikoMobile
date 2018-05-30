import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor,
  },
  titleContainer: {
    width: 340,
  },
  title: {
    // fontFamily: 'Helvetica',
    fontWeight: '700',
    color: colors.SignUp.title,
    fontSize: 28,
    marginBottom: 42,
    marginTop: 16,
    justifyContent: 'flex-start',
  },
  warn: {
    color: colors.restPassword.warn,
    fontSize: 15,
    paddingBottom: 24,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.SignUp.text,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: colors.SignUp.btnBorderColor,
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: colors.SignUp.btnBackgroundColor,
    marginBottom: 60,
    paddingHorizontal: 27,
    paddingVertical: 10,
  },
  textBtn: {
    color: colors.white,
    fontSize: 14,
  },
  top: {
    flex: 1,
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 32,
    alignItems: 'center',
  },
});

export default styles;
