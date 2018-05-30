import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    paddingRight: 15,
    paddingLeft: 67,
  },
  title: {
    color: colors.questionItem.titleText,
    // fontFamily: 'Helvetica',
    fontSize: 28,
    fontWeight: '700',
    paddingTop: 16,
    paddingBottom: 18,
  },
  description: {
    backgroundColor: colors.white,
    width: '100%',
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  descrText: {
    // fontFamily: 'Helvetica',
    fontSize: 15,
  },

});

export default styles;
