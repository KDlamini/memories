import axios from 'axios';

const url = 'https://memories-mern-project505.herokuapp.com/posts';

const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'JWT fefege...',
    "Access-Control-Allow-Origin": "*"
}

export const fecthPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost, { headers: headers});

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);