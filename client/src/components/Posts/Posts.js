import react from 'react';

import Post from './Post/Post.js';
import useStyles from './styles.js';

const Posts = () => {
    const classes = useStyles();
    
    return (
        <>
            <h1>Posts</h1>
            {/* adding multiple posts using the Post component */}
            <Post />
            <Post />
            <Post />
        </>
    );
};

export default Posts;