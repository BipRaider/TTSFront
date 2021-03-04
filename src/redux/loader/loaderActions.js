/* eslint-disable import/no-anonymous-default-export */
'use strick';

import { createAction } from '@reduxjs/toolkit';

export const startLoader = createAction('loader/START');
const endLoader = createAction('loader/END');

export default { endLoader };
