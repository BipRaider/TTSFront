'use strick';

import React from 'react';

import styles from './Swagger.module.css';

const LoginForm = () => {
   return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a
         href="https://powerful-springs-97618.herokuapp.com/api-docs/"
         target="_blank"
         className={styles.link}
      >
         Swagger
      </a>
   );
};

export default LoginForm;
