import { StyleSheet } from "react-native"
import { human } from "react-native-typography"

const styles = StyleSheet.create({
  card: {
    shadowColor: "rgb(153,153,153)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8
  },
  imageWrapper: {
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 212
    // boxShadow: '0 4px 20px 1px ',
    // borderRadius: 8,
  },
  date: {
    ...human.caption1Object,
    color: iOSColors.midGray
  },
  dateWrapper: {
    marginBottom: 4,
    height: 15,
    width: "100%"
  },
  title: {
    ...human.headlineObject
  },
  titleWrapper: {
    marginBottom: 8,
    height: 48,
    width: "100%"
  },
  description: {
    padding: 12,
    position: "absolute",
    bottom: 0,
    opacity: 0.75,
    backgroundColor: "#FAFAFA",
    width: "100%"
  },
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  container: {
    backgroundColor: "#e1e4e8"
  }
})

export default styles
