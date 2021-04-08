import { configureStore } from '@reduxjs/toolkit';
import featureSlice from './features';

export default configureStore({
  reducer: {
      featureSlice
  },
})