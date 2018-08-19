import React, { Component } from 'react'
import { View, TouchableOpacity, Animated, Image, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from './styles'

const CollectionImage = ({ styles, image }) => (
  <View style={styles.imageWrapper}>
    <Image style={styles.image} source={image} />
  </View>
)

const CollectionGridImage = ({ styles, image }) => (
  <View style={styles.imageGridWrapper}>
    <Image style={styles.imageGrid} source={image} />
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
          {this.props.isGrid
            ? <CollectionGridImage styles={styles} image={this.props.image} />
            : <CollectionImage styles={styles} image={this.props.image} />}
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

Collection.propTypes = {
  image: PropTypes.number,
  isGrid: PropTypes.bool
}

export default Collection
