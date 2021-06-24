import axios from 'axios';

const url = 'http://localhost:4000/posts';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...',
    "Access-Control-Allow-Origin": "*"
}

export const fecthPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost, { headers: headers});