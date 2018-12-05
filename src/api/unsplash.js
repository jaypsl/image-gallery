import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
        headers : {
            Authorization: 'Client-ID 7785b251c40a3eb684e8a986d33724fa7c4b2775f5b8f6b8a4ff3ee42c32eeb3'
        }
})