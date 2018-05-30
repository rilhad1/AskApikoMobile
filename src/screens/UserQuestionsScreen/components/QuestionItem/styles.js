import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/index';

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.questionItem.background,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingVertical: 10,

  },
  leftBar: {
    height: '100%',
    width: '15%',
    flex: 1,
    paddingRight: 5,
    paddingTop: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  votes: {
    color: colors.questionItem.votesCount,
    marginBottom: 5,
    //  fontFamily: 'Helvetica Neue',
    fontSize: 13,
  },
  rightBar: {
    width: '90%',
    paddingRight: 15,
  },
  title: {
    color: colors.questionItem.titleText,
    fontSize: 15,
    fontWeight: '700',
    //    fontFamily: 'Helvetica Neue',
    paddingBottom: 10,
  },
  asked: {
    color: colors.questionItem.dateText,
    fontSize: 13,
    //    fontFamily: 'Helvetica Neue',
  },
  askedBy: {
    color: colors.questionItem.askedBy,
    //    fontFamily: 'Helvetica Neue',
    fontSize: 13,
  },
});

export default styles;
