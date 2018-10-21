import { StyleSheet } from 'react-native'
import { human } from 'react-native-typography'

const styles = StyleSheet.create({
  tags: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  tag: {
    backgroundColor: '#E8E8E8',
    borderRadius: 2,
    marginRight: 8,
    padding: 5,
    maxWidth: 100
  },
  text: {
    ...human.caption1Object
  }
})

export default styles
