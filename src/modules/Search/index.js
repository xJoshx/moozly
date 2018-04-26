import React, { Component } from 'react';
import { Text, ScrollView, Image, View } from 'react-native';
import PropTypes from 'prop-types';

import Card from '../../components/Card';
import Header from '../../components/Header';
import styles from './styles';

const MOCK_IMAGE = require('../../images/img1.jpg'),
  MOCK_TAGS = [
    { text: 'design' },
    { text: 'illustration' },
    { text: 'tutorial' },
  ],
  MOCK_TITLE = 'Whatever the hell that fits two rows asdfadsf ';

class Search extends Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Header text="Search" />
        <Card image={MOCK_IMAGE} tags={MOCK_TAGS} title={MOCK_TITLE} />
        <Card image={MOCK_IMAGE} tags={MOCK_TAGS} title={MOCK_TITLE} />
      </ScrollView>
    );
  }
}

Search.propTypes = {};

export default Search;
