import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/index';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
  },
  header: {
    paddingVertical: 11,
    paddingLeft: 18,
  },
  headerText: {
    //  fontFamily: 'Helvetica',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
  body: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyLeft: {
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
  bodyText: {
    flex: 6,
    paddingVertical: 13,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  desc: {
    // fontFamily: 'Helvetica',
    fontSize: 15,
  },
});

export default styles;
