import { configureStore } from '@reduxjs/toolkit';

import { apiProfile } from '../lib/features/profile/apiProfile';
import profileSliceReducer from '../lib/features/profile/profileSlice';

export const store = configureStore({
  reducer: {
    [apiProfile.reducerPath]: apiProfile.reducer,
    profile: profileSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([apiProfile.middleware]),
  devTools: true
});
