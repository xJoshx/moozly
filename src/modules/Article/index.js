import React, { Component } from 'react'
import { Text, View, TouchableOpacity, WebView } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import { timeout } from 'rxjs/operator/timeout'

class Article extends Component {
  state = {}

  render () {
    const link = this.props.navigation.getParam('link', 'Peter')
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: link }}
          style={{ flex: 1 }}
          automaticallyAdjustContentInsets
        />
      </View>
    )
  }
}

Article.propTypes = {
  url: PropTypes.string
}

export default Article
