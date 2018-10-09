import React, { Component } from 'react'
import { Text, View, TouchableOpacity, WebView } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import { timeout } from 'rxjs/operator/timeout'

class Article extends Component {
  state = {}

  render () {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'https://github.com/facebook/react-native' }}
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
