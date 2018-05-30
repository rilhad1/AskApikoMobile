const config = {
  devBuild: ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),
  api_url: 'https://askmobileboichuk.herokuapp.com/api/v1',
};

export default config;
