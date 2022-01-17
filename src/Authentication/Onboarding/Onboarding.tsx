import React, { useRef } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import Animated, {
  divide,
  interpolateColor,
  multiply,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
// import { useValue, onScrollEvent } from 'react-native-redash/lib/module/v1';

import { Slide, SLIDE_HEIGHT } from './Slide';
import { Subslide } from './Subslide';
import { Dot } from './Dot';

const BORDER_RADIUS = 75;
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    // backgroundColor: 'rgba(100, 200, 300, 0.5)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width,
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
  const currentIndex = useDerivedValue(() => x.value / width);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
    },
  });

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
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} index={index} currentIndex={currentIndex} />
            ))}
          </View>
          <Animated.View
            style={[
              {
                flex: 1,
                flexDirection: 'row',
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
    </View>
  );
};
