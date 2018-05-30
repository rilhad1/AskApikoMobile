import {
  compose,
  hoistStatics,
  withHandlers,
  withPropsOnChange,
  withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import * as questionsOperation from '../../modules/questions/operation';
// import * as questionsSelectors from '../../modules/questions/selectors';
import CreateQuestionScreen from './CreateQuestionScreenView';

const mapStateToProps = state => ({
  // isCreated: questionsSelectors.getCreatingInState(state),
});

const mapDispatchToProps = {
  getQuestion: questionsOperation.createQuestion,
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
      console.log(`
      title: ${props.title},
      description: ${props.description},
      tags: ${props.tags},
      `);
      try {
        await props.getQuestion({
          title: props.title,
          description: props.description,
          tags: props.tags,
        });
      } catch (error) {
        console.error(error);
      }
    },
  }),
);

export default hoistStatics(enhancer)(CreateQuestionScreen);
