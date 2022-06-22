import axios from 'axios';

export default axios.create({
    baseURL: 'https://codepath-store-api.herokuapp.com'
});