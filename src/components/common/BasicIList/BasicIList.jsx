'use strick';

import React from 'react';

import BasicItem from '../BasicItem';

import styles from './BasicIList.module.css';

const Item = ({ children, ...props }) => {
   const { listItem } = props;

   return (
      <ul className={styles.list}>
         {listItem.map(value => (
            <BasicItem key={value.id} {...value}>
               {children}
            </BasicItem>
         ))}
      </ul>
   );
};

export default Item;
