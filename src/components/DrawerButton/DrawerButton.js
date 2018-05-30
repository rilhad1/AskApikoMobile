import React from 'react';
import T from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Touchable } from '../';
import s from './styles';
import { colors } from '../../styles';

const DrawerButton = ({
  toggleDrawer,
}) => (
  <Touchable
    style={s.icon}
    onPress={toggleDrawer}
    useOpacity
    borderless
  >
    <Ionicons
      color={colors.drawerButton.color}
      size={28}
      name="md-menu"
    />
  </Touchable>
);

DrawerButton.propTypes = {
  toggleDrawer: T.func,
};

export default DrawerButton;
