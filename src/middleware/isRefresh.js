import { bicyclesActions, bicyclesOperations } from '../redux/bicycles';

import { loaderActions } from '../redux/loader';

const refreshState = ({ dispatch }) => next => async action => {
   try {
      if (action.type === bicyclesActions.registerBikeSuccess.type) {
         await bicyclesOperations.getBicyclesListHire(dispatch);
         dispatch(loaderActions.endLoader());
      }

      return next(action);
   } catch (err) {
      return next(action);
   }
};

export default refreshState;
