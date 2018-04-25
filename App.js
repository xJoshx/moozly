import React from 'react';
import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';
import { human } from 'react-native-typography';

import { Tags, Tag } from './components/Tags';
import Card from './components/Card';
import Header from './components/Header';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Header text="Today" />
        <Card />
        <Card />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40,
  },
});
