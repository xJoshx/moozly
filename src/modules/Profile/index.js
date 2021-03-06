import React, { Component } from 'react';
import { Text, ScrollView, Image, View } from 'react-native';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import styles from './styles';

const MOCK_IMAGE = require('../../images/img1.jpg'),
  MOCK_TAGS = [
    { text: 'design' },
    { text: 'illustration' },
    { text: 'tutorial' },
  ],
  MOCK_TITLE = 'Whatever the hell that fits two rows asdfadsf ';

class Profile extends Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Header text="Profile" />
      </ScrollView>
    );
  }
}

Profile.propTypes = {};

export default Profile;
