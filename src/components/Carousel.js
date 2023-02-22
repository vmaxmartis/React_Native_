import React, { useEffect, useRef } from 'react';
import { View, Animated, FlatList } from 'react-native';
import PropTypes from 'prop-types';

const Carousel = ({ page, onChangePage, style, slideRef, data, renderItem }) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    slideRef.current.scrollToIndex({ index: page });
  }, [page]);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    onChangePage(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  return (
    <View style={style}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slideRef}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

Carousel.propTypes = {
  style: PropTypes.any,
  slideRef: PropTypes.any,
  data: PropTypes.array,
  renderItem: PropTypes.func,
  page: PropTypes.number,
  onChangePage: PropTypes.func,
}

Carousel.defaultProps = {
  style: {},
  slideRef: null,
  data: [],
  renderItem: () => {},
  page: 0,
  onChangePage: () => {},
}

export default Carousel;
