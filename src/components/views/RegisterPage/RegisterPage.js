'use strick';

import React from 'react';

import RegistrationForm from '../../presentational/RegistrationForm';
import RentList from '../../presentational/RentList';
import AvailableBicycles from '../../presentational/AvailableBicycles';

import styles from './RegisterPage.module.css';

const RegisterPage = () => {
   return (
      <div className={styles.wrapper}>
         <h2>Awesome Bike Rental</h2>
         <RegistrationForm />
         <RentList />
         <AvailableBicycles />
      </div>
   );
};

export default RegisterPage;
