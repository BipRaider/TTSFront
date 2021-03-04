'use strick';

import React from 'react';

import styles from './Sections.module.css';

const Sections = ({ children }) => {
   return <section className={styles.container}>{children}</section>;
};

export default Sections;
