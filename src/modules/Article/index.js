import React, { Component } from 'react'
import { Text, View, TouchableOpacity, WebView } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import { timeout } from 'rxjs/operator/timeout'

class Article extends Component {
  state = {}

  render () {
    return (
      <View style={{ marginTop: 20, flex: 1 }}>
        <Text>{'Go back'}</Text>
        <WebView
          source={{ uri: 'https://github.com/facebook/react-native' }}
          style={{ marginTop: 20, flex: 1 }}
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
