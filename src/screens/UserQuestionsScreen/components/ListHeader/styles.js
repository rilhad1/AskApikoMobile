import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.header.backgroundColor,
  },
  title: {
    // fontFamily: 'Helvetica',
    fontSize: 28,
    fontWeight: '700',
    paddingVertical: 18,
    marginLeft: 18,
  },
});

export default styles;
