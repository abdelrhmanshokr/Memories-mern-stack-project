import mongoose from 'mongoose';

const postsSchema = mongoose.Schema({
    title: String,
    message: String,
    owner: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
});

// convert it to a model 
const postsModel = mongoose.model('posts', postsSchema);
export default postsModel;