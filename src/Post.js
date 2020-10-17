import React, { useState, useEffect } from 'react';

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/posts/active')
            .then(response => {
                return response.json();
            }).then(resAsJson => {
                console.log(resAsJson);
                setPosts(resAsJson)
            })
    }, []);

    const getPost = (e) => {
        const id = e.target.id;
        console.log(id)
    }

    return (
        posts && posts.length > 0 ?
            posts.map(post => {
                return <div className="post-card" id={post.id} onClick={getPost} key={post.id}>
                    <img src={`http://localhost:8000/storage/Images/${post.image}`} alt={post.image} className="img" />
                    <p className="post-title">{post.title}</p>
                    <p className="post-content">{post.info}
                        <span className="post-user"> Written By: {post.name}</span>
                    </p>
                </div>
            })
            : null
    )
}
export default Post;