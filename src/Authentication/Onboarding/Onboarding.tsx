import React, { useRef } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import Animated, {
  interpolateColor,
  multiply,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
// import { useValue, onScrollEvent } from 'react-native-redash/lib/module/v1';

import { Slide, SLIDE_HEIGHT } from './Slide';
import { Subslide } from './Subslide';

const BORDER_RADIUS = 75;
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    backgroundColor: 'cyan',
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
});

const slides = [
  {
    title: 'Relaxed',
    subTitle: 'Find Your Outfits',
    description: `Confused about your outfit? Don't worry! Find the best outfit here!`,
    color: '#BFEAF5',
  },
  {
    title: 'Playful',
    subTitle: 'Hear it First, Wear it First',
    description:
      'Hating the clothes in your wardrobe? Explore Hundreds of outfit ideas',
    color: '#BEECC4',
  },
  {
    title: 'Eccentric',
    subTitle: 'Your Style, Your Way',
    description:
      'Create your individual & unique style and look amazing everyday',
    color: '#FFE4D9',
  },
  {
    title: 'Funky',
    subTitle: 'Look Good',
    description:
      'Discover the latest trends in fashion and explore your personality',
    color: '#FFDDDD',
  },
];

export const Onboarding = () => {
  const scrollRef = useRef<Animated.ScrollView>(null);
  const x = useSharedValue(0);
  // const onScroll = onScrollEvent({x})
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
    },
  });
  // const colors = ['#BFEAF5', '#BEECC4', '#FFE4D9', '#FFDDDD'];
  const sliderStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      x.value,
      slides.map((_, i) => i * width),
      slides.map((slide) => slide.color)
    ),
  }));
  const footerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -x.value }],
  }));
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, sliderStyle]}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={1}
          bounces={false}
        >
          {slides.map((slide, index) => (
            <Slide label={slide.title} right={!!(index % 2)} key={index} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={[{ ...StyleSheet.absoluteFillObject }, sliderStyle]}
        />
        <Animated.View
          style={[
            styles.footerContent,
            {
              width: width * slides.length,
            },
            footerStyle,
          ]}
        >
          {slides.map(({ subTitle, description }, index) => (
            <Subslide
              subTitle={subTitle}
              last={index === slides.length - 1}
              description={description}
              key={index}
              onPress={() => {
                if (scrollRef.current) {
                  scrollRef.current.scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }
              }}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};
