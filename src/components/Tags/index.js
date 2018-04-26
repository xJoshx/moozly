import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class Tag extends Component {
  render() {
    return (
      <View style={styles.tag}>
        <Text style={styles.text}>{`#${this.props.text}`}</Text>
      </View>
    );
  }
}

Tag.propTypes = {
  text: PropTypes.string,
};

class Tags extends Component {
  render() {
    return <View style={styles.tags}>{this.props.children}</View>;
  }
}

Tags.propTypes = {
  children: PropTypes.arrayOf(Tag), //TODO: Fixme
};

export { Tag, Tags };
