import { StyleSheet } from 'react-native';
import { human } from 'react-native-typography';

const styles = StyleSheet.create({
  title: {
    ...human.title1Object,
    fontWeight: '600',
  },
  titleWrapper: {
    marginBottom: 16,
    overflow: 'hidden',
    width: '80%',
  },
});

export default styles;
