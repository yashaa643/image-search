import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a1ZZFoqu6dPbb6k2LF_l72KpU5Gr3gBLw1L3Q-8oGBs'
      }
})