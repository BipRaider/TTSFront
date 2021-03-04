'use strick';

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { bicyclesActions } from '.';

const INITIAL_BIKE_STATE = {
   name: null,
   rent: null,
   typeBike: null,
   id: null,
   hire: null,
   time: null,
};

const newBike = (_, { payload }) => {
   const { name, _id, rent, hire, typeBike, time } = payload;
   return { name, id: _id, rent, hire, typeBike, time };
};

const deleteBike = (state, { payload }) => {
   return state.filter(({ id }) => id !== payload);
};

const addBike = (state, { payload }) => {
   return [...state, payload];
};

const registerBike = createReducer(INITIAL_BIKE_STATE, {
   [bicyclesActions.registerBikeSuccess]: newBike,
   [bicyclesActions.registerBikeRequest]: () => INITIAL_BIKE_STATE,
});

const listRent = createReducer([], {
   [bicyclesActions.addBikeListRent]: addBike,
   [bicyclesActions.removeBikeListRent]: deleteBike,
   [bicyclesActions.listRentSuccess]: (_, { payload }) => payload,
});

const listHire = createReducer([], {
   [bicyclesActions.addBikeListHire]: addBike,
   [bicyclesActions.removeBikeListHire]: deleteBike,
   [bicyclesActions.listHireBikeSuccess]: (_, { payload }) => payload,
});

export default combineReducers({
   registerBike,
   listHire,
   listRent,
});
