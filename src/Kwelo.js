import axios from 'axios';

const kwelo = axios.create({
    baseUrl: 'https://api.kwelo.com/v1/network/ip-address/location/',
});

export default kwelo;
