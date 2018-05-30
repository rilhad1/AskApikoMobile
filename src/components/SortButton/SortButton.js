import React from 'react';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Touchable } from '../';
import s from './styles';
import { colors } from '../../styles';


const SortButton = () => (
  <Touchable
    style={s.icon}
    useOpacity
    borderless
  >
    <Ionicons
      color={colors.drawerButton.color}
      size={28}
      name="md-options"
    />
  </Touchable>
);

SortButton.propTypes = {
  toggleDrawer: T.func,
};

export default SortButton;
