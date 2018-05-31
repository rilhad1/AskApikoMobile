import React from 'react';
import T from 'prop-types';
import { ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../styles';
import s from './styles';

const LoadingModal = ({
  isVisible,
}) => (
  <Modal style={s.spinner} isVisible={isVisible} >
    <ActivityIndicator
      size={70 || 'large'}
      color={colors.orange}
    />
  </Modal>
);


LoadingModal.propTypes = {
  isVisible: T.bool,
};

export default LoadingModal;
