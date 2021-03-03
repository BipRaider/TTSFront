import { createReducer } from '@reduxjs/toolkit';

import { bicyclesActions } from '../bicycles';
import loaderAction from './loaderActions';

const loader = createReducer(false, {
   [loaderAction.endLoader]: () => false,

   [bicyclesActions.loginUserError]: () => true,
   [bicyclesActions.loginUserRequest]: () => true,
   [bicyclesActions.loginUserSuccess]: () => false,

   [bicyclesActions.registerUserError]: () => true,
   [bicyclesActions.registerUserRequest]: () => true,
   [bicyclesActions.registerUserSuccess]: () => false,

   [bicyclesActions.logoutUserError]: () => true,
   [bicyclesActions.logoutUserRequest]: () => true,
   [bicyclesActions.logoutUserSuccess]: () => false,

   [bicyclesActions.currentUserError]: () => true,
   [bicyclesActions.currentUserRequest]: () => true,
   [bicyclesActions.currentUserSuccess]: () => false,
});

export default loader;
