import React from 'react';

import styles from './BasicInput.module.css';

const BasicInput = ({ ...props }) => {
   const { onChange } = props;

   return (
      <input
         className={styles.input}
         {...props}
         required
         onChange={({ target }) => onChange(target)}
      />
   );
};

export default BasicInput;
