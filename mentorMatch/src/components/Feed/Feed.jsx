import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../Post/Post';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/posts/') // Replace with actual API endpoint
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className="w-full md:w-2/3 p-4 mx-auto"> {/* Adjust width and center the container */}
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Feed;
