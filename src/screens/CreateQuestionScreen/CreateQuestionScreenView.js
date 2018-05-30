import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './styles';
import { DrawerButton, HeaderLogo, Separator, CreateQuestionInput } from '../../components';
import SendButton from './components/SendButton/SendButton';
import { headerStyle } from '../../styles';

const CreateQuestionScreen = ({
  title,
  description,
  tags,
  onChange,
}) => (
  <View style={s.container}>
    <View style={s.header}>
      <Text style={s.title}>Create question</Text>
      <Separator />
    </View>
    <View style={s.form}>
      <CreateQuestionInput
        value={title}
        onChange={text => onChange('title', text)}
        placeholder="Qustion title…"
      />
      <CreateQuestionInput
        value={description}
        onChange={text => onChange('description', text)}
        placeholder="Type your question here…"
      />
      <CreateQuestionInput

        value={tags}
        onChange={text => onChange('tags', text)}
        placeholder="Tags separated by whitespace…"
      />
    </View>
    <View style={s.footer}>
      <Separator />
      <Text style={s.fooText}>600</Text>
    </View>
  </View>
);

CreateQuestionScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: <HeaderLogo />,
  headerLeft: <DrawerButton toggleDrawer={() => navigation.toggleDrawer()} />,
  headerRight: <SendButton props={navigation} />,
  ...headerStyle,
});

CreateQuestionScreen.propTypes = {
  title: T.string,
  description: T.string,
  tags: T.string,
  onChange: T.func,
};

export default CreateQuestionScreen;
