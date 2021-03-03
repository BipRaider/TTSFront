'use strick';

import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { bicyclesOperations, bicyclesSelector, bicyclesActions } from '../../../redux/bicycles';

import BasicButton from '../../common/BasicButton';
import BasicIList from '../../common/BasicIList';

const RentList = () => {
   const listItem = useSelector(bicyclesSelector.getListRent);
   const [totalRent, setTotalRent] = useState(0);

   const dispatch = useDispatch();

   const handlerClick = e => {
      e.preventDefault();
      console.dir(e.target.parentElement.dataset.id);
      dispatch(bicyclesActions.removeBikeListRent(e.target.parentElement.dataset.id));
   };

   useEffect(() => {
      bicyclesOperations.getBicyclesListRent(dispatch);
   }, []);

   useEffect(() => {
      countTotalRent(listItem);
   }, [listItem]);

   const countTotalRent = data => {
      data.forEach(({ rent }) => {
         setTotalRent(prev => prev + rent);
      });
   };

   return (
      <section>
         <h2>Your rent (Total: ${totalRent})</h2>

         <BasicIList listItem={listItem}>
            <BasicButton
               onClick={e => {
                  handlerClick(e);
               }}
               id={''}
            >
               Cancel Rent
            </BasicButton>
         </BasicIList>
      </section>
   );
};

export default RentList;
