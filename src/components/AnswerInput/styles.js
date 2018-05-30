import { StyleSheet } from 'react-native';
import color from '../../styles/colors';

const styles = StyleSheet.create({
  input: {
    minWidth: 340,
    borderRadius: 5,
    borderColor: color.InputAuth.borderColor,
    borderStyle: 'solid',
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: color.InputAuth.backgroundColor,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
    height: 38,
  },
});

export default styles;
