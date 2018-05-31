import React, { Component } from 'react'
import { View, TouchableOpacity, Animated, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const CollectionImage = ({ styles, image }) => (
  <View style={styles.imageWrapper}>
    <Image style={styles.image} source={image} />
  </View>
)

class Collection extends Component {
  state = {}

  _animatedPress () {}

  render () {
    const animatedStyles = {}
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => this._animatedPress()}
      >
        <Animated.View style={animatedStyles}>
          <CollectionImage styles={styles} image={this.props.image} />
          <Text>{`Polla`}</Text>
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

Collection.propTypes = {
  image: PropTypes.number
}

export default Collection
