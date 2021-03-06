import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 144,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 34,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
  },
});

export default styles;
