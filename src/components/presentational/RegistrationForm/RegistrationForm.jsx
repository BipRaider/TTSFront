'use strick';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import BasicInput from '../../common/BasicInput';
import BasicButton from '../../common/BasicButton';

import { bicyclesOperations } from '../../../redux/bicycles';

import styles from './RegistrationForm.module.css';
import Alert from '../Alert';
import Sections from '../../common/Sections';
import BikeType from './BikeType';

const RegistrationForm = () => {
   const [bikeName, setBikeName] = useState('');
   const changeBikeName = ({ value }) => setBikeName(value);

   const [bikeType, setBikeType] = useState('city');
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
      setRentPrice('');
   };

   return (
      <Sections>
         <h3 className={styles.title}>Create new rent</h3>
         <Alert>
            <form className={styles.form} onSubmit={handlerSubmit}>
               <BasicInput
                  value={bikeName}
                  type="text"
                  placeholder="Bike name*"
                  onChange={changeBikeName}
               />

               <BikeType onChange={changeBikeType}></BikeType>

               <BasicInput
                  value={rentPrice}
                  type="text"
                  placeholder="Rent price*"
                  onChange={changeRentPrice}
               />

               <BasicButton type="submit">Submit rent</BasicButton>
            </form>
         </Alert>
      </Sections>
   );
};

export default RegistrationForm;
