import {
  compose,
  hoistStatics, lifecycle,
  withHandlers,
  withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import * as questionsOperation from '../../modules/questions/operation';
import CreateQuestionScreen from './CreateQuestionScreenView';

const mapStateToProps = () => ({

});

const mapDispatchToProps = {
  postQuestion: questionsOperation.createQuestion,
};

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({
    title: '',
    description: '',
    tags: '',
  }, {
    onChange: () => (field, value) => ({ [field]: value }),
  }),
  withHandlers({
    createQuestions: props => async () => {

      try {
        await props.postQuestion({
          title: props.title,
          description: props.description,
          tags: props.tags.split(' '),
        });
      } catch (error) {
        console.error(error);
      }
    },

  }),
  lifecycle({
    componentDidMount() {
      this.props.navigation.setParams({ send: this.props.createQuestions });
    },
  }),
);

export default hoistStatics(enhancer)(CreateQuestionScreen);
