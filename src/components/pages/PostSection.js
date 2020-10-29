import React, { useState, useEffect } from 'react';
import './PostSection.css';

const PostSection = () => {
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
                <div className="work">
            <div className="container">
            <div className="part first">
                    <h2 className="work-title">{post.title}</h2>
                    <img src={`http://localhost:8000/posts/${post.image}`} alt={post.image} className="img" />
                        <h4 className="part-title">{post.date}</h4>
                        <hr className="line"/>
                        <p className="part-desc">
                        {post.info}
                        <h3 className="part-title">إعداد  :: {post.name}</h3>
                        <h3 className="part-title">بتاريخ   :: {post.created_at}</h3>
                        </p>
                        </div>
                       
                        
                        </div>
                    </div>
                    </div>
                    

                    
            })
            : null
    )
}
export default PostSection;