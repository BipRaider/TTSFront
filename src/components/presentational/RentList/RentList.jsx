'use strick';

import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { bicyclesOperations, bicyclesSelector } from '../../../redux/bicycles';

import BasicIList from '../../common/BasicIList';
import Sections from '../../common/Sections';
import RentBtn from './RideBtn/RentBtn';

const RentList = () => {
   const listItem = useSelector(bicyclesSelector.getListRent);

   const [totalRent, setTotalRent] = useState(0);

   const dispatch = useDispatch();

   useEffect(() => {
      bicyclesOperations.getBicyclesListRent(dispatch);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      countTotalRent(listItem);
   }, [listItem]);

   const countTotalRent = data => {
      let count = 0;
      data.forEach(({ rent }) => {
         count += rent;
      });
      setTotalRent(count);
   };

   return (
      <Sections>
         <h3>Your rent (Total: ${totalRent})</h3>

         <BasicIList listItem={listItem}>
            <RentBtn>Cancel Rent </RentBtn>
         </BasicIList>
      </Sections>
   );
};

export default RentList;
