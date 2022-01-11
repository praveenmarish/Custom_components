import { configureStore } from '@reduxjs/toolkit';
import reducer from 'redux/slice';

export default configureStore({
  reducer: {
    theme: reducer,
  },
});
