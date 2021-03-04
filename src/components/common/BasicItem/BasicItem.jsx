'use strick';

import React from 'react';

import styles from './BasicItem.module.css';

const BasicItem = ({ children, ...props }) => {
   const { id, name, rent, typeBike: bikeType } = props;

   return (
      <li className={styles.item} data-id={id}>
         <p className={styles.text}>
            {name} / {bikeType} / ${rent}
         </p>
         <div className={styles.listBtn} data-id={id}>
            {children}
         </div>
      </li>
   );
};

export default BasicItem;
