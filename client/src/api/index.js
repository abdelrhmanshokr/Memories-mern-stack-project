import axios from 'axios';

// the url to connect to right now it's localhost but later it'll be on the server
const url = 'https://localhost:5000/api/posts';

// then create an endpoint to each call we have in the backend and export it 
export const fetchPosts = axios.get(url);

// then all the action with the frontend will be done using redux 
// which adds huge advantage when it comes to scalability 
// it needs some files to be added usually a boilerplate to make it easier
