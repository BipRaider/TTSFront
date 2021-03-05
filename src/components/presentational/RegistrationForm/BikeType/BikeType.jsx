'use strick';

import React from 'react';

import styles from './BikeType.module.css';

const BikeType = ({ ...props }) => {
   const { onChange } = props;

   return (
      <select
         className={styles.select}
         size="1"
         name="city"
         onChange={({ target }) => onChange(target)}
      >
         <option value="city">Bike type*</option>
         <option value="travel">travel</option>
         <option value="city">city</option>
         <option value="mountain">mountain</option>
         <option value="road">road</option>
         <option value="touring">touring</option>
         <option value="hybrid">hybrid</option>
         <option value="BMX">BMX</option>
         <option value="unicycles">unicycles</option>
         <option value="exotic">exotic</option>
         <option value="cruisers">cruisers</option>
         <option value="tandems">tandems</option>
      </select>
   );
};

export default BikeType;
