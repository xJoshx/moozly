import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import PropTypes from 'prop-types';
import { Tags, Tag } from '../Tags';
import styles from './styles';

// .activities-list-item:active {
//   transform: translateY(6px);
//   cursor: pointer;
//   box-shadow: 0 1px 10px 4px rgba(151, 151, 151, 0.6) !important;
//   transition: translateY 0.6s ease-in;
// }

const CardImage = ({ styles, image }) => (
  <View style={styles.imageWrapper}>
    <Image style={styles.image} source={image} />
  </View>
);

const CardTitle = ({ styles, title }) => (
  <View style={styles.titleWrapper}>
    <Text style={styles.title}> {title} </Text>
  </View>
);

const CardDescription = ({ styles, title, tags }) => (
  <View style={styles.description}>
    <CardTitle styles={styles} title={title} />
    <Tags>{tags.map((tag, index) => <Tag key={index} text={tag.text} />)}</Tags>
  </View>
);

class Card extends Component {
  state = {
    pressAnimationTranslateY: new Animated.Value(0),
    animatedShadow: {
      shadowOffset: {
        width: 0,
        height: new Animated.Value(4),
      },
      shadowOpacity: new Animated.Value(0.4),
      shadowRadius: new Animated.Value(8),
    },
  };

  _resetAnimationValues = () => {
    this.state.pressAnimationTranslateY.setValue(0);
    this.state.animatedShadow.shadowOffset.height.setValue(4);
    this.state.animatedShadow.shadowOpacity.setValue(0.4);
    this.state.animatedShadow.shadowRadius.setValue(8);
  };

  _animatedPress(valueTo = 6) {
    const duration = 333;
    const easeOutBack = Easing.bezier(0.175, 0.885, 0.32, 1.275);
    this._resetAnimationValues();

    Animated.parallel([
      Animated.timing(this.state.pressAnimationTranslateY, {
        toValue: valueTo,
        duration: duration,
        easing: easeOutBack,
      }),
      Animated.timing(this.state.animatedShadow.shadowRadius, {
        toValue: 3,
        duration: duration,
        easing: Easing.linear,
      }),
      Animated.timing(this.state.animatedShadow.shadowOpacity, {
        toValue: 0.9,
        duration: duration,
        easing: Easing.linear,
      }),
    ]).start();
  }

  render() {
    const { title, tags, image } = this.props,
      { pressAnimationTranslateY, animatedShadow } = this.state;
    const animatedStyles = [
      styles.card,
      {
        transform: [
          {
            translateY: pressAnimationTranslateY,
          },
        ],
        ...animatedShadow,
      },
    ];

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => this._animatedPress()}
      >
        <Animated.View style={animatedStyles}>
          <CardImage styles={styles} image={image} />
          <CardDescription styles={styles} title={title} tags={tags} />
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.number,
};

export default Card;
