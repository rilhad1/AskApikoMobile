import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import T from 'prop-types';
import { DrawerButton, Separator, HeaderLogo, SortButton } from '../../components';
import { QuestionItem, ListHeader, EmptyList } from './components';
import { colors, headerStyle} from '../../styles';
import s from './styles';

const UserQuestionsScreen = ({
  navigation,
  navigateToDetailQuestion,
  questionList,
  getQuestions,
  getQuestionsMore,
  isAuthorized,
  isLoading,
  isLoadingMore,
}) => (
  <View style={s.container}>
    <FlatList
      data={questionList}
      refreshing={false}
      onRefresh={getQuestions}
      ListHeaderComponent={<ListHeader />}
      ListEmptyComponent={
        <EmptyList
          isLoading={isLoading}
          navigation={navigation}
          isAuthorized={isAuthorized}
        />}
      ItemSeparatorComponent={Separator}
      ListFooterComponent={
        isLoadingMore && <ActivityIndicator
          size={30 || 'small'}
          color={colors.orange}
        />
      }
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

UserQuestionsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: <HeaderLogo />,
  headerLeft: <DrawerButton toggleDrawer={() => navigation.toggleDrawer()} />,
  headerRight: <SortButton />,
  ...headerStyle,
});

UserQuestionsScreen.propTypes = {
  navigation: T.any,
  navigateToDetailQuestion: T.func,
  questionList: T.array,
  getQuestionsMore: T.func,
  getQuestions: T.func,
  isAuthorized: T.bool,
  isLoading: T.bool,
  isLoadingMore: T.bool,
};

export default UserQuestionsScreen;

