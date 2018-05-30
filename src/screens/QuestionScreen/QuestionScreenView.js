import React from 'react';
import { View, FlatList } from 'react-native';
import T from 'prop-types';
import { HeaderLogo, Separator } from '../../components';
import { AnswerListHeader, AnswerItem, EmptyList, Footer } from './components';
import { headerStyle } from '../../styles';
import s from './styles';


const QuestionScreen = ({
  navigation,
  question,
  answers,
  id,
  isAuthorized,
}) => (
  <View style={s.container}>
    <FlatList
      data={answers}
      refreshing={false}
      onRefresh={() => {}}
      ListHeaderComponent={<AnswerListHeader {...question} />}
      ItemSeparatorComponent={Separator}
      ListFooterComponent={<Footer navigation={navigation} id={id} />}
      ListEmptyComponent={<EmptyList isAuthorized={isAuthorized} />}
      keyExtractor={item => (`${item._id}`)}
      renderItem={({ item }) => (
        <AnswerItem
          title={item.title}
          description={item.description}
          createdAt={item.createdAt}
          createdBy={item.createdBy}
        />
      )}
      onEndReachedThreshold={0.7}
    />
  </View>
);

QuestionScreen.navigationOptions = () => ({
  headerTitle: <HeaderLogo />,
  ...headerStyle,
});

QuestionScreen.propTypes = {
  navigation: T.any,
  isAuthorized: T.bool,
  question: T.object,
  getAnswersMore: T.func,
  answers: T.array,
  id: T.string,
};

export default QuestionScreen;
