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
    marginRight: 16,
    marginTop: 8,
    transform: [{ translateY: 1 }],
    alignContent: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: 212
  },
  imageGridWrapper: {
    width: 135,
    height: 135,
    shadowColor: 'rgb(153,153,153)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 3.5,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 8,
    marginRight: 6,
    marginTop: 8,
    marginLeft: 6,
    transform: [{ translateY: 1 }],
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  imageGrid: {
    width: '100%',
    height: 135
  }
})

export default styles
