import Post from '../models/postsModel.js';

export const getPosts = async(req, res) => {
    try{
        const posts = await Post.find();

        return res.status(200).json(posts)
    }catch(err){
        return res.status(404).json(err.message);
    }
};

export const createPost = async(req, res) => {
    try{

    }catch(err){
        return res.status(409).json(err.message)
    }
};