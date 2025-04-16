// src/services.js
import { environment } from "./environment";
// import { getToken } from "../Utils/Common";
import axios from 'axios';

const baseURL = environment.POSTGRES_API;

export async function loginUser(username, password) {
  try {
    const response = await axios.post(baseURL+'/api/login', {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    // Handle Axios errors
    if (error.response) {
      // Server responded with status other than 2xx
      throw new Error(error.response.data.detail || 'Login failed');
    } else if (error.request) {
      // Request was made but no response received
      throw new Error('No response from server');
    } else {
      // Something else happened
      throw new Error('Error: ' + error.message);
    }
  }
}
