'use strick';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { bicyclesReducers } from '../redux/bicycles';

import { loaderReducer } from '../redux/loader';
import { errorReducer } from './error';
import { isErrorAlert, isRefresh } from '../middleware';

const defMidd = getDefaultMiddleware({
   serializableCheck: false,
});

export const store = configureStore({
   reducer: {
      bicycles: bicyclesReducers,
      isError: errorReducer,
      loader: loaderReducer,
   },
   middleware: [...defMidd, isRefresh, isErrorAlert],
});
