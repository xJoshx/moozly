import React, { Component } from "react"
import { Text, ScrollView, Image, View } from "react-native"
import PropTypes from "prop-types"

import Card from "../../components/Card"
import Header from "../../components/Header"
import styles from "./styles"
// import fetch from 'node-fetch'
const axios = require("axios")
import _ from "lodash"

const MOCK_IMAGE = require("../../images/img1.jpg"),
  MOCK_TAGS = ["design", "illustration", "tutorial"],
  MOCK_TITLE = "Whatever the hell that fits two rows asdfadsf ",
  MOCK_LOGO = require("../../images/designbetter.jpg")
const RSS_URL = "https://api.rss2json.com/v1/api.json"
const API_KEY = "pcgrfzuigilguxik9w4ariznz2zt0psrucioixbb"
const feeds = [
  "https://abduzeedo.com/rss.xml",
  "https://www.designernews.co/?format=rss",
  "http://blog.invisionapp.com/feed/"
]

const updateItems = items => this.setState({ items })

const fetchRSS = async url => {
  try {
    const rssFeed = await axios.get(RSS_URL, {
      params: {
        rss_url: url,
        api_key: API_KEY
      }
    })
    const content = { logo: rssFeed.data.image, items: rssFeed.data.items }
    return content
  } catch (e) {
    console.error(e)
  }
}
const isMinor = (a, b) => a < b
const getItemCategories = categories => categories.slice(0, 2)
const getItemThumbnail = thumbnail => {
  if (thumbnail.length > 0) {
    return thumbnail
  } else {
    return "https://d2si0b2wb4t75n.cloudfront.net/assets/square-logo-f43f0632619701daec20134483f2241e.png"
  }
}
class Feed extends Component {
  state = {
    items: []
  }

  async componentDidMount() {
    const response = await Promise.all(feeds.map(item => fetchRSS(item)))
    const flattenItems = _.union(...response.items)
    const items = flattenItems.sort((a, b) => a.pubDate < b.pubDate)

    if (items) {
      this.setState({
        items
      })
    }
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Header text="Today" />
        {!this.state.items.length ? (
          <View>{"Loading..."}</View>
        ) : (
          this.state.items.map((item, index) => {
            return (
              <Card
                image={getItemThumbnail(item.thumbnail)}
                tags={getItemCategories(MOCK_TAGS)}
                title={item.title}
                onPress={() =>
                  this.props.navigation.navigate({
                    routeName: "Article",
                    params: {
                      link: item.link
                    }
                  })
                }
                key={index}
              />
            )
          })
        )}
      </ScrollView>
    )
  }
}

Feed.propTypes = {}

export default Feed
