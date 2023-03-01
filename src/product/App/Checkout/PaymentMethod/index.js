import { Image, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PaymentMethod = ({ selected, imageSource, onSelect }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect} activeOpacity={0.8}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      {selected ? <Icon style={styles.checkIcon} name="checkmark-circle" size={20} color="#39ce8a" /> : <></>}
    </TouchableOpacity>
  );
};

PaymentMethod.propTypes = {
  selected: PropTypes.bool,
  imageSource: PropTypes.any,
  onSelect: PropTypes.func,
};

PaymentMethod.defaultProps = {
  selected: false,
  imageSource: '',
  onSelect: () => {},
};

export default PaymentMethod;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 75,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 40,
  },
  checkIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
  }
});
