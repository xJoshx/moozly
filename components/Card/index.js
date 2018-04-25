import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Tags, Tag } from '../Tags';
import styles from './styles';

const DUMMY_IMAGE = require('../../images/img1.jpg');

class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={DUMMY_IMAGE} />
        </View>
        <View style={styles.description}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>
              Changes you make will automatically reload.
            </Text>
          </View>
          <Tags>
            <Tag text="design" />
            <Tag text="ux/ui" />
            <Tag text="tutorial" />
          </Tags>
        </View>
      </View>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
