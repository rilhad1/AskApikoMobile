import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import T from 'prop-types';
import { DrawerItem, Logo } from '../../../components';
import { screens } from '../../';
import { globalStyles } from '../../../styles';

const AuthorizedDrawer = (props) => {
  const items = [
    { label: 'Home', key: screens.Home, iconName: 'ios-chatbubbles' },
    { label: 'Search', key: screens.Search, iconName: 'ios-search' },
    { label: 'CreateQuestion', key: screens.CreateQuestion, iconName: 'ios-add-circle' },
    { label: 'Profile', key: screens.Profile, iconName: 'ios-person' },
    { separator: true, key: 'separator' },
    { label: 'About Us', key: screens.AboutUs, iconName: 'ios-information-circle' },
    { label: 'Terms & Conditions', key: screens.TermsAndCondition, iconName: 'ios-document' },
    { separator: true, key: 'separator' },
    {
      label: 'Sign Out',
      key: 'SignOut',
      onPress: props.signingOut,
      iconName: 'md-log-in',
    },
  ];

  return (
    <ScrollView>
      <SafeAreaView
        style={globalStyles.fillAll}
        forceInset={{ top: 'always', horizontal: 'never' }}
      >
        <Logo borderBottom />

        {items.map((item, index) => (
          <DrawerItem
            key={`${item.key}-${index}`}
            {...props}
            item={item}
          />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};


AuthorizedDrawer.propTypes = {
  navigation: T.shape({
    navigate: T.func,
  }),
  signingOut: T.func,
};

export default AuthorizedDrawer;
