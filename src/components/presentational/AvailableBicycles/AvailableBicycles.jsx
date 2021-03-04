'use strick';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bicyclesOperations, bicyclesSelector } from '../../../redux/bicycles';

import BasicIList from '../../common/BasicIList';
import Sections from '../../common/Sections';
import AddBileInRentList from './AddBileInRentList/AddBileInRentList';
import DeleteBileInHireList from './DeleteBileInHireList/DeleteBileInHireList';

const RentList = () => {
   const listItem = useSelector(bicyclesSelector.getListHire);

   const [listBicycles, setListBicycles] = useState(listItem);

   const [countBicycles, setCountBicycles] = useState(0);

   const dispatch = useDispatch();

   useEffect(() => {
      setListBicycles(listItem);
      setCountBicycles(listItem.length);
   }, [listItem]);

   useEffect(() => {
      bicyclesOperations.getBicyclesListHire(dispatch);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Sections>
         <h3>Available bicycles ({countBicycles})</h3>

         <BasicIList listItem={listBicycles}>
            <AddBileInRentList>Rent</AddBileInRentList>

            <DeleteBileInHireList>Delete</DeleteBileInHireList>
         </BasicIList>
      </Sections>
   );
};

export default RentList;
