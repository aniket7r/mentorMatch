import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostsSection = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/v1/posts')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div className="p-5 bg-white h-full overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Posts</h2>
            {/* Map through posts and display them */}
            {posts.map((post, index) => (
                <div className="mb-3 p-3 border border-gray-300 rounded-lg bg-gray-100" key={index}>
                    <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                    <p className="text-gray-700">{post.content}</p>
                </div>
            ))}
        </div>
    );
};

export default PostsSection;
