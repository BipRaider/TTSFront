'use strick';

import React from 'react';
import { useDispatch } from 'react-redux';
import { bicyclesActions, bicyclesOperations } from '../../../../redux/bicycles';

import styles from './DeleteBileInHireList.module.css';

const DeleteBileInHireList = ({ children, ...props }) => {
   const dispatch = useDispatch();

   const handlerChange = e => {
      e.preventDefault();
      const id = e.target.parentElement.dataset.id;

      writeBikeDate(id);
   };

   const writeBikeDate = bikeId => {
      dispatch(bicyclesActions.removeBikeListHire(bikeId));

      bicyclesOperations.deleteBike(bikeId, dispatch);
   };

   return (
      <button
         className={styles.basic_button}
         onClick={e => {
            handlerChange(e);
         }}
      >
         {children}
      </button>
   );
};

export default DeleteBileInHireList;
