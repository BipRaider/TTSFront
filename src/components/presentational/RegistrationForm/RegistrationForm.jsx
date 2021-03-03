'use strick';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import BasicInput from '../../common/BasicInput';
import BasicButton from '../../common/BasicButton';

import { bicyclesOperations } from '../../../redux/bicycles';

import styles from './RegistrationForm.module.css';
import Alert from '../Alert';

const RegistrationForm = () => {
   const [bikeName, setBikeName] = useState('');
   const changeBikeName = ({ value }) => setBikeName(value);

   const [bikeType, setBikeType] = useState('');
   const changeBikeType = ({ value }) => setBikeType(value);

   const [rentPrice, setRentPrice] = useState('');
   const changeRentPrice = ({ value }) => setRentPrice(value);

   const dispatch = useDispatch();

   const handlerSubmit = e => {
      e.preventDefault();

      bicyclesOperations.registerNewBike(
         { name: bikeName, typeBike: bikeType, rent: rentPrice },
         dispatch,
      );

      clearForm();
   };

   const clearForm = () => {
      setBikeName('');
      setBikeType('');
      setRentPrice('');
   };

   return (
      <div className={styles.wrapper}>
         <h2 className={styles.title}>Create new rent</h2>
         <Alert>
            <form className={styles.form} onSubmit={handlerSubmit}>
               <BasicInput
                  value={bikeName}
                  type="text"
                  placeholder="Bike name*"
                  onChange={changeBikeName}
               />
               <BasicInput
                  value={bikeType}
                  type="text"
                  placeholder="Bike type*"
                  onChange={changeBikeType}
               />
               <BasicInput
                  value={rentPrice}
                  type="text"
                  placeholder="Rent price*"
                  onChange={changeRentPrice}
               />

               <BasicButton type="submit">Submit rent</BasicButton>
            </form>
         </Alert>
      </div>
   );
};

export default RegistrationForm;
