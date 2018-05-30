import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles/index';

const styles = StyleSheet.create({
  tags: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  tag: {
    color: colors.questionItem.tagsText,
    backgroundColor: colors.questionItem.tagsBackground,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 6,
    //  fontFamily: 'Helvetica Neue',
    fontSize: 13,
  },
});

export default styles;
