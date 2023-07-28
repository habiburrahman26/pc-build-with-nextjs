import pcBuildReducer from './features/pcBuild/pcBuild';

const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    pcBuild: pcBuildReducer,
  },
});

export default store;
