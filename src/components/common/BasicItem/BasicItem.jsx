'use strick';

import React from 'react';

import BasicButton from '../BasicButton';

import styles from './BasicItem.module.css';

const Item = ({ children, ...props }) => {
   const { id, name, rent, typeBike: bikeType } = props;

   return (
      <li className={styles.item} data-id={id}>
         <p className={styles.text}>
            {name} / {bikeType} / ${rent}
         </p>
         {children}
      </li>
   );
};

export default Item;
