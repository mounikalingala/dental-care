import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // placeholder

export const submitContactForm = (formData) => {
    return axios.post(API_URL, formData);
};
