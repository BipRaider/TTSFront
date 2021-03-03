/* eslint-disable import/no-anonymous-default-export */
import { bicyclesActions } from '.';

import fetchDB from '../../services/fetchDB';

const registerNewBike = async (data, dispatch) => {
   dispatch(bicyclesActions.registerBikeRequest());
   try {
      const { bike } = await fetchDB.post(`/add`, data);

      dispatch(bicyclesActions.registerBikeSuccess(bike));
      dispatch(bicyclesActions.addBikeListHire(bike));
   } catch (error) {
      dispatch(bicyclesActions.registerBikeError(error));
   }
};

const getBicyclesListHire = async dispatch => {
   dispatch(bicyclesActions.listHireBikeRequest());
   try {
      const data = await fetchDB.get(`/hire`, { hire: false });

      await dispatch(bicyclesActions.listHireBikeSuccess(data));
   } catch (error) {
      dispatch(bicyclesActions.listHireBikeError());
   }
};

const getBicyclesListRent = async dispatch => {
   dispatch(bicyclesActions.listRentRequest());
   try {
      const data = await fetchDB.get(`/hire`, { hire: true });
      await dispatch(bicyclesActions.listRentSuccess(data));
   } catch (error) {
      dispatch(bicyclesActions.listRentError(error));
   }
};

const changeBike = async (id, dispatch) => {
   dispatch(bicyclesActions.refreshBikeRequest());
   try {
      const data = await fetchDB.patch(`/change`, id);

      await dispatch(bicyclesActions.refreshBikeSuccess(data));
   } catch (error) {
      dispatch(bicyclesActions.refreshBikeError(error));
   }
};

const deleteBike = () => async (id, dispatch) => {
   dispatch(bicyclesActions.refreshBikeRequest());
   try {
      const data = await fetchDB.patch(`/delete`, id);

      await dispatch(bicyclesActions.refreshBikeSuccess(data));
   } catch (error) {
      dispatch(bicyclesActions.refreshBikeError(error));
   }
};

export default {
   registerNewBike,
   getBicyclesListHire,
   getBicyclesListRent,
   deleteBike,
   changeBike,
};
