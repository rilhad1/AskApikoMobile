import * as actions from './actions';
import Api from '../../api';

export const getUser = () => async (dispatch) => {
  try {
    dispatch(actions.getUserStart());

    const User = await Api.getUser();

    const payload = User.data.user;

    dispatch(actions.getUserSuccess(payload));
  } catch (err) {
    dispatch(actions.getUserError({ message: err.message }));

    throw new Error('Load questions error');
  }
};

