import React, { useRef, useState, useEffect } from "react";
import { Image, View, StyleSheet, useWindowDimensions } from "react-native";
import PropTypes from "prop-types";
import Carousel from "./../../../../components/Carousel";

const CarouselSlider = ({ style, imageSources }) => {
  const slideRef = useRef(null);
  const { width } = useWindowDimensions();
  const [page, setPage] = useState(0);

  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   scrollTo(page + 1);
    // }, 1000);
    // return () => clearInterval(intervalId);
  }, []);

  const scrollTo = (index) => {
    let currentIndex = index;
    if (currentIndex >= imageSources.length) {
      currentIndex = 0;
    }
    setPage(currentIndex);
  };

  const mapData = (data) => {
    return data.map((item, index) => ({
      id: index,
      imageSource: item,
    }));
  };

  return (
    <View style={[styles.container, style]}>
      <Carousel
        slideRef={slideRef}
        data={mapData(imageSources)}
        renderItem={({ item, index }) => {
          return (
            <Image
              key={index}
              style={[styles.image, { width }]}
              source={item.imageSource}
            />
          );
        }}
        page={page}
        onChangePage={setPage}
      />
    </View>
  );
};

CarouselSlider.propTypes = {
  style: PropTypes.any,
  imageSources: PropTypes.array,
};

CarouselSlider.defaultProps = {
  style: {},
  imageSources: [],
};

export default CarouselSlider;

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 300,
  },
});
