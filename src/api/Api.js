import axios from 'axios';
import config from '../config';

class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  setToken(token) { // eslint-disable-line
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  signUp({ username, password, email }) {
    return axios.post(`${this._baseUrl}/auth/sign-up`, {
      email,
      username: email,
      password,
      profile: { fullName: username },
    });
  }

  signIn({ username, password }) {
    return axios.post(`${this._baseUrl}/auth/sign-in`, {
      username,
      password,
    });
  }

  signOut() {
    return axios.post(`${this._baseUrl}/auth/sign-out`);
  }

  getQuestions({ limit = 10, skip = 0 } = {}) {
    return axios.get(
      `${this._baseUrl}/questions?limit=${limit}&&skip=${skip}`,
    );
  }

  searchQuestions({ search = '' } = {}) {
    return axios.get(
      `${this._baseUrl}/questions?search=${search}`,
    );
  }

  getAnswersByQuestionId({ id }){
    return axios.get(
      `${this._baseUrl}/questions/${id}/answers`,
    );
  }

  createQuestion({ title, description, tags, createdById }) {
    return axios.post(
      `${this._baseUrl}/questions`, {
        tags,
        title,
        description,
        createdById,
      });
  }

  createAnswer({ title, description, questionId }) {
    return axios.post(
      `${this._baseUrl}/questions/${questionId}/answers`, {
        title,
        description,
        questionId,
      });
  }

  getUser() {
    return axios.get(
      `${this._baseUrl}/users/my`,
    );
  }
}

const api = new Api(config.api_url);

export default api;
