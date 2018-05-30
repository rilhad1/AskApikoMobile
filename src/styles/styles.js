import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  fillAll: {
    flex: 1,
  },
  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.headerBorderBottom,
  },
  borderTop: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.headerBorderBottom,
  },
});

export default styles;
