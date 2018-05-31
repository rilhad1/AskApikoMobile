import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: colors.backgroundColor,
  },
  headerTitle: {
    backgroundColor: colors.backgroundColor,
    flex: 4,
    paddingRight: 15,
    paddingLeft: 15,
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
  titleLeft: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
  },
  votes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  voteCount: {
    color: colors.orange,
    // fontFamily: 'Helvetica',
    fontSize: 15,
    fontWeight: '700',
  },

});

export default styles;
