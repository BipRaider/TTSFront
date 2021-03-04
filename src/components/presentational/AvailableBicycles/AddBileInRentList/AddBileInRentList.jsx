'use strick';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bicyclesActions, bicyclesOperations, bicyclesSelector } from '../../../../redux/bicycles';

import styles from './AddBileInRentList.module.css';

const AddBileInRentList = ({ children, ...props }) => {
   const listHire = useSelector(bicyclesSelector.getListHire);
   const dispatch = useDispatch();

   const handlerChange = e => {
      e.preventDefault();
      const id = e.target.parentElement.dataset.id;
      addBikeInRant(id);
   };

   const addBikeInRant = id => {
      const newItem = listHire.find(value => value.id === id);

      dispatch(bicyclesActions.addBikeListRent(newItem));
      dispatch(bicyclesActions.removeBikeListHire(id));

      bicyclesOperations.changeBike(id, dispatch);
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

export default AddBileInRentList;
