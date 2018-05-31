import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { DrawerButton, HeaderLogo, SortButton } from '../../components';
import { headerStyle } from '../../styles';


const SearchScreen = () => (
  <View style={s.container}>
    <Text style={s.text}>
      This is Search Screens
    </Text>
  </View>
);

SearchScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: <HeaderLogo />,
  headerLeft: <DrawerButton toggleDrawer={() => navigation.toggleDrawer()} />,
  headerRight: <SortButton />,
  ...headerStyle,
});

SearchScreen.propTypes = {

};

export default SearchScreen;
