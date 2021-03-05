/* eslint-disable react/jsx-no-target-blank */
'use strick';

import React from 'react';

import styles from './Header.module.css';

const LoginForm = () => {
   return (
      <header>
         <a
            href="https://powerful-springs-97618.herokuapp.com/api-docs/"
            target="_blank"
            className={styles.link}
         >
            Swagger
         </a>
         <a href="https://github.com/BipRaider/TTSFront" target="_blank" className={styles.link}>
            Front
         </a>
         <a href="https://github.com/BipRaider/TTSBack" target="_blank" className={styles.link}>
            Back
         </a>
      </header>
   );
};

export default LoginForm;
