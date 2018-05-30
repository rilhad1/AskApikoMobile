import React from 'react';
import T from 'prop-types'; // eslint-disable-line
import { Text } from 'react-native';
import Modal from 'react-native-modal';
import s from './styles';

const LoadingModal = ({
  isVisible,
}) => (
  <Modal isVisible={isVisible} >
    <Text>Loading.....</Text>
  </Modal>
);


LoadingModal.propTypes = {
  isVisible: T.bool,
};

export default LoadingModal;
