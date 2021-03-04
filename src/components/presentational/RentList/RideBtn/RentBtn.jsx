'use strick';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bicyclesActions, bicyclesSelector, bicyclesOperations } from '../../../../redux/bicycles';

import styles from './RentBtn.module.css';

const RentBtn = ({ children }) => {
   const listRent = useSelector(bicyclesSelector.getListRent);
   const dispatch = useDispatch();

   const handlerChange = e => {
      e.preventDefault();
      const id = e.target.parentElement.dataset.id;
      addBikeInRant(id);
   };

   const addBikeInRant = id => {
      const newItem = listRent.find(value => value.id === id);

      dispatch(bicyclesActions.addBikeListHire(newItem));
      dispatch(bicyclesActions.removeBikeListRent(id));

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

export default RentBtn;
