import React, { Component } from 'react'
import { Text, ScrollView, Image, View } from 'react-native'
import PropTypes from 'prop-types'

import Card from '../../components/Card'
import Header from '../../components/Header'
import styles from './styles'
// import fetch from 'node-fetch'
const axios = require('axios')

const MOCK_IMAGE = require('../../images/img1.jpg'),
  MOCK_TAGS = [
    { text: 'design' },
    { text: 'illustration' },
    { text: 'tutorial' }
  ],
  MOCK_TITLE = 'Whatever the hell that fits two rows asdfadsf '
const RSS_URL = 'https://api.rss2json.com/v1/api.json'
const API_KEY = 'pcgrfzuigilguxik9w4ariznz2zt0psrucioixbb'
const feeds = ['https://www.hongkiat.com/blog/feed/']

const updateItems = items => this.setState({ items })

const fetchRSS = async url => {
  try {
    const rssFeed = await axios.get(RSS_URL, {
      params: {
        rss_url: url,
        api_key: API_KEY
      }
    })
    return rssFeed.data.items
  } catch (e) {
    console.error(e)
  }
}

const getItemCategories = categories => categories.slice(0, 2)
class Feed extends Component {
  state = {
    items: []
  }

  async componentDidMount () {
    const items = await fetchRSS(feeds[0])
    if (items) {
      this.setState({ items })
    }
  }

  render () {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Header text='Today' />
        {!this.state.items.length
          ? <View>{'Loading...'}</View>
          : this.state.items.map((item, index) => {
            console.log(item.thumbnail)
            return (
              <Card
                image={item.thumbnail}
                tags={getItemCategories(item.categories)}
                title={item.title}
                onPress={() =>
                    this.props.navigation.navigate({
                      routeName: 'Article',
                      params: {
                        link: item.link
                      }
                    })}
                key={index}
                />
            )
          })}

      </ScrollView>
    )
  }
}

Feed.propTypes = {}

export default Feed
