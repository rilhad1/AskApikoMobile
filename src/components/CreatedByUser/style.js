import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundColor,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 17,
    paddingVertical: 12,
  },
  userName: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  img: {
    width: 30,
    height: 30,
  },
  askedBy: {
    marginLeft: 20,
    marginTop: 4,
    //    fontFamily: 'Helvetica',
    fontSize: 15,
  },
  timeContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  asked: {
    fontSize: 13,
    fontWeight: '700',
    // fontFamily: 'Helvetica',
  },
  time: {
    // fontFamily: 'Helvetica',
    fontSize: 13,
  },
});

export default styles;
