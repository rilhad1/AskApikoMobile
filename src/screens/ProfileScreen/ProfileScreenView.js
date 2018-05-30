import React from 'react';
import { FlatList, View } from 'react-native';
import T from 'prop-types';
import { DrawerButton, HeaderLogo, Separator } from '../../components';
import { QuestionItem } from '../UserQuestionsScreen/components';
import ProfileHeader from './component/ProfileHeader/ProfileHeader';
import s from './styles';
import { headerStyle } from '../../styles';

const ProfileScreen = ({
  user,
  userQuestions = [],
  getQuestions,
  getQuestionsMore,
  navigateToDetailQuestion,
}) => (
  <View style={s.container}>
    <FlatList
      data={userQuestions}
      refreshing={false}
      onRefresh={getQuestions}
      ListHeaderComponent={<ProfileHeader {...user} />}
      //ListEmptyComponent={<EmptyList />}
      ItemSeparatorComponent={Separator}
      keyExtractor={item => (`${item._id}-${item.title}`)}
      renderItem={({ item }) => (
        <QuestionItem
          onPress={navigateToDetailQuestion}
          id={item._id}
          title={item.title}
          tags={item.tags.filter(el => el.split('').length > 0)}
          createdAt={item.createdAt}
          createdBy={item.createdBy}
        />
      )}
      onEndReachedThreshold={0.7}
      onEndReached={getQuestionsMore}
    />
  </View>
);

ProfileScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: <HeaderLogo />,
  headerLeft: <DrawerButton toggleDrawer={() => navigation.toggleDrawer()} />,
  ...headerStyle,

});

ProfileScreen.propTypes = {
  user: T.object,
  userQuestions: T.array,
  getQuestions: T.func,
  getQuestionsMore: T.func,
  navigateToDetailQuestion: T.func,
};

export default ProfileScreen;


