/* eslint-disable import/no-anonymous-default-export */
'use strick';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3100';
//axios.defaults.baseURL = 'https://powerful-springs-97618.herokuapp.com';

axios.defaults.headers.get['Accept'] = 'application/json';

const get = async (url, reqBody = null) => {
   try {
      const { data } = await axios.get(url, { params: reqBody });

      return data;
   } catch (error) {
      throw error;
   }
};

const post = async (url, reqBody = null) => {
   try {
      const { data } = await axios.post(url, reqBody);
      return data;
   } catch (error) {
      throw error;
   }
};

const patch = async (url, reqBody = null) => {
   try {
      const { data } = await axios.patch(url, reqBody);
      return data;
   } catch (error) {
      throw error;
   }
};

const del = async (url, reqBody) => {
   try {
      const { data } = await axios.delete(url, { id: reqBody });

      return data;
   } catch (error) {
      throw error;
   }
};

export default { get, post, patch, del };
