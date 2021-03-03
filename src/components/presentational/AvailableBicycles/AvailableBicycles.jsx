'use strick';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { bicyclesOperations, bicyclesSelector, bicyclesActions } from '../../../redux/bicycles';
import BasicButton from '../../common/BasicButton';
import BasicIList from '../../common/BasicIList';

import styles from './AvailableBicycles.module.css';

const RentList = () => {
   const listItem = useSelector(bicyclesSelector.getListHire);
   const [countBicycles, setCountBicycles] = useState(0);

   const dispatch = useDispatch();

   const handlerClick = e => {
      e.preventDefault();
      dispatch(bicyclesActions.removeBikeListHire(e.target.parentElement.dataset.id));
   };

   useEffect(() => {
      setCountBicycles(listItem.length);
   }, [listItem]);

   useEffect(() => {
      bicyclesOperations.getBicyclesListHire(dispatch);
   }, []);

   return (
      <section className={styles.container}>
         <h2>Available bicycles ({countBicycles})</h2>

         <BasicIList listItem={listItem}>
            <BasicButton
               onClick={e => {
                  handlerClick(e);
               }}
            >
               Rent
            </BasicButton>
            <BasicButton
               onClick={e => {
                  handlerClick(e);
               }}
            >
               Delete
            </BasicButton>
         </BasicIList>
      </section>
   );
};

export default RentList;
