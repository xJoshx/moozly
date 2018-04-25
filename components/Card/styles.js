import { StyleSheet } from 'react-native';
import { human } from 'react-native-typography';

const styles = StyleSheet.create({
  card: {
    width: '90%',
    height: 320,
    shadowColor: 'rgb(153,153,153)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 32,
    transform: [{ translateY: 1 }],
  },
  imageWrapper: {
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 212,
    // boxShadow: '0 4px 20px 1px ',
    // borderRadius: 8,
  },
  title: {
    ...human.headlineObject,
  },
  titleWrapper: {
    marginBottom: 8,
    height: 48,
    overflow: 'hidden',
  },
  description: {
    padding: 12,
  },
});

export default styles;
