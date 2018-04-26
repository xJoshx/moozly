import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{this.props.text}</Text>;
      </View>
    );
  }
}

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
