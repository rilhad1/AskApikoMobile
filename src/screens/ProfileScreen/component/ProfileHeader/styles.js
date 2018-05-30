import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

const styles = StyleSheet.create({
  header: {
    paddingVertical: 18,
    paddingHorizontal: 18,
    backgroundColor: colors.backgroundColor,
  },
  title: {
    // fontFamily: 'Helvetica',
    fontSize: 28,
    fontWeight: '700',
  },
  user: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 27,
    paddingHorizontal: 18,
    backgroundColor: colors.white
  },
  img: {
    width: 65,
    height: 65,
    marginRight: 18,
  },
  username: {
    // fontFamily: 'Helvetica',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 7,
  },
  email: {
    // fontFamily: 'Helvetica',
    fontSize: 17,
  },
  postContainer: {
    paddingVertical: 13,
    paddingHorizontal: 17,
    backgroundColor: colors.backgroundColor,
  },
  post: {
    // fontFamily: 'Helvetica',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default styles;
