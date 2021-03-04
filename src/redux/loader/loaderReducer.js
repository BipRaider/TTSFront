'use strick';

import { createReducer } from '@reduxjs/toolkit';

import { bicyclesActions } from '../bicycles';
import loaderAction from './loaderActions';

const loader = createReducer(false, {
   [loaderAction.endLoader]: () => false,

   [bicyclesActions.registerBikeError]: () => true,
   [bicyclesActions.registerBikeRequest]: () => true,
   [bicyclesActions.registerBikeSuccess]: () => false,

   [bicyclesActions.listRentError]: () => true,
   [bicyclesActions.listRentRequest]: () => true,
   [bicyclesActions.listRentSuccess]: () => false,

   [bicyclesActions.deleteBikeRequest]: () => true,
   [bicyclesActions.deleteBikeError]: () => true,
   [bicyclesActions.deleteBikeSuccess]: () => false,

   [bicyclesActions.listHireBikeRequest]: () => true,
   [bicyclesActions.listHireBikeError]: () => true,
   [bicyclesActions.listHireBikeSuccess]: () => false,

   [bicyclesActions.changeBikeRequest]: () => true,
   [bicyclesActions.changeBikeError]: () => true,
   [bicyclesActions.changeBikeError]: () => false,
});

export default loader;
