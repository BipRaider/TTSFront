import React from 'react';

import RegistrationForm from '../../presentational/RegistrationForm';
import RentList from '../../presentational/RentList';
import AvailableBicycles from '../../presentational/AvailableBicycles';

import styles from './RegisterPage.module.css';

const RegisterPage = () => {
   return (
      <div className={styles.wrapper}>
         <RegistrationForm />
         <RentList />
         <AvailableBicycles />
      </div>
   );
};

export default RegisterPage;
