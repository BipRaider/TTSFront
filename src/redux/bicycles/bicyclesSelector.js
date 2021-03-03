/* eslint-disable import/no-anonymous-default-export */
const getBike = state => state.bicycles.registerBike;
const getBikeId = state => state.bicycles.registerBike.id;
const getListRent = state => state.bicycles.listRent;
const getListHire = state => state.bicycles.listHire;

export default {
   getBike,
   getListRent,
   getListHire,
   getBikeId,
};
