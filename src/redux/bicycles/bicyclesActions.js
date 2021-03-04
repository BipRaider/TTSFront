/* eslint-disable import/no-anonymous-default-export */
'use strick';

import { createAction } from '@reduxjs/toolkit';
const findBike = createAction('FIND/findBike');

const listRentRequest = createAction('GET/listRentRequest');
const listRentSuccess = createAction('GET/listRentSuccess');
const listRentError = createAction('GET/listRentError');

const addBikeListRent = createAction('ADD/addBikeListRent');
const removeBikeListRent = createAction('REMOVE/removeBikeListRent');

const listHireBikeRequest = createAction('GET/listHireRequest');
const listHireBikeSuccess = createAction('GET/listHireSuccess');
const listHireBikeError = createAction('GET/listHireUserError');

const addBikeListHire = createAction('ADD/addBikeListHire');
const removeBikeListHire = createAction('REMOVE/removeBikeListHire');

const registerBikeRequest = createAction('POST/registerRequest');
const registerBikeSuccess = createAction('POST/registerSuccess');
const registerBikeError = createAction('POST/registerError');

const changeBikeRequest = createAction('PATCH/changeBikeRequest');
const changeBikeSuccess = createAction('PATCH/changeBikeSuccess');
const changeBikeError = createAction('PATCH/changeBikeError');

const deleteBikeRequest = createAction('DELETE/deleteBikeRequest');
const deleteBikeSuccess = createAction('DELETE/deleteBikeSuccess');
const deleteBikeError = createAction('DELETE/deleteBikeError');

export default {
   findBike,
   addBikeListHire,
   removeBikeListHire,
   removeBikeListRent,
   addBikeListRent,

   listRentRequest,
   listRentSuccess,
   listRentError,

   registerBikeRequest,
   registerBikeSuccess,
   registerBikeError,

   deleteBikeRequest,
   deleteBikeSuccess,
   deleteBikeError,

   listHireBikeRequest,
   listHireBikeSuccess,
   listHireBikeError,

   changeBikeRequest,
   changeBikeSuccess,
   changeBikeError,
};
