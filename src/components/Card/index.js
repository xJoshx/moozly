import React, { Component } from "react"
import styled from "styled-components"
import { Text, View, TouchableOpacity, Animated, Easing } from "react-native"
import PropTypes from "prop-types"
import { Tags, Tag } from "../Tags"
import styles from "./styles"

const ImageWrapper = styled.View`
  border-radius: 12px;
  overflow: hidden;
`

const Image = styled.Image`
  width: 100%;
  height: 320px;
`

const TitleWrapper = styled.View`
  margin-bottom: 8px;
  height: 48px;
  width: 100%;
`

const Date = styled.Text`
  font-size: 10px;
  color: #868e96;
  letter-spacing: 0;
`

const DescriptionWrapper = styled.View`
  padding: 16px 16px 16px 56px;
  position: absolute;
  bottom: 0;
  height: 90px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`

const CardWrapper = styled.View`
  position: relative;
  height: 320px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 32px;
  transform: translateY(1px);
  min-width: 90%;
  max-width: 90%;
`

const Logo = styled.Image`
  width: 24px;
  height: 24px;
`

const CardImage = ({ image }) => (
  <ImageWrapper>
    <Image source={{ uri: image }} />
  </ImageWrapper>
)

const CardDate = ({ styles, date }) => (
  <View style={styles.dateWrapper}>
    <Text style={styles.date} numberOfLines={1}>
      {date}
    </Text>
  </View>
)

const CardTitle = ({ styles, title }) => (
  <TitleWrapper>
    <Text style={styles.title} numberOfLines={2}>
      {title}
    </Text>
  </TitleWrapper>
)

const CardDescription = ({ styles, title, date = "28-Oct-2018", image }) => (
  <DescriptionWrapper>
    <Logo source={{ uri: image }} />
    <Date>{date}</Date>
    <CardTitle styles={styles} title={title} />
  </DescriptionWrapper>
)

class Card extends Component {
  state = {
    pressAnimationTranslateY: new Animated.Value(0),
    animatedShadow: {
      shadowOffset: {
        width: 0,
        height: new Animated.Value(4)
      },
      shadowOpacity: new Animated.Value(0.4),
      shadowRadius: new Animated.Value(8)
    }
  }

  _resetAnimationValues = () => {
    this.state.pressAnimationTranslateY.setValue(0)
    this.state.animatedShadow.shadowOffset.height.setValue(4)
    this.state.animatedShadow.shadowOpacity.setValue(0.4)
    this.state.animatedShadow.shadowRadius.setValue(8)
  }

  _resetAnimationValuesWithDelay = delay => {
    setTimeout(() => this._resetAnimationValues(), delay)
  }

  _animatedPress(valueTo = 6) {
    const duration = 333
    const easeOutBack = Easing.bezier(0.175, 0.885, 0.32, 1.275)
    this._resetAnimationValues()

    Animated.parallel([
      Animated.timing(this.state.pressAnimationTranslateY, {
        toValue: valueTo,
        duration: duration,
        easing: easeOutBack
      }),
      Animated.timing(this.state.animatedShadow.shadowRadius, {
        toValue: 3,
        duration: duration,
        easing: Easing.linear
      }),
      Animated.timing(this.state.animatedShadow.shadowOpacity, {
        toValue: 0.9,
        duration: duration,
        easing: Easing.linear
      })
    ]).start(this._resetAnimationValuesWithDelay(1000))
  }

  render() {
    const { title, tags, image } = this.props,
      { pressAnimationTranslateY, animatedShadow } = this.state
    const animatedStyles = [
      styles.card,
      {
        transform: [
          {
            translateY: pressAnimationTranslateY
          }
        ],
        ...animatedShadow
      }
    ]

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          this._animatedPress()
          this.props.onPress()
        }}
      >
        <Animated.View style={animatedStyles}>
          <CardWrapper>
            <CardImage styles={styles} image={image} />
            <CardDescription styles={styles} title={title} tags={tags} />
          </CardWrapper>
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.string
}

export default Card
