import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.backgroundColor,

  },
  title: {
    // fontFamily: 'Helvetica',
    fontSize: 28,
    fontWeight: '700',
    marginVertical: 18,
    marginHorizontal: 18,
  },
  form: {
    flex: 7,
    backgroundColor: colors.white,
  },
  footer: {
    backgroundColor: colors.backgroundColor,
  },
  fooText: {
    textAlign: 'right',
    //  fontFamily: 'Helvetica',
    fontSize: 15,
    fontWeight: '700',
    marginHorizontal: 18,
    marginVertical: 18,
  },
});


export default styles;
