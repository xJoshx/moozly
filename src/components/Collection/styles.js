import { StyleSheet } from 'react-native'
import { human } from 'react-native-typography'

const styles = StyleSheet.create({
  imageWrapper: {
    width: 225,
    height: 220,
    shadowColor: 'rgb(153,153,153)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 32,
    transform: [{ translateY: 1 }],
    alignContent: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: 212
    // boxShadow: '0 4px 20px 1px ',
    // borderRadius: 8,
  }
})

export default styles
