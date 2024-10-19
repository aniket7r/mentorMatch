import React from 'react';
import { FaThumbsUp, FaComment, FaShare, FaPaperPlane } from 'react-icons/fa';

const Post = ({ post }) => {
  return (
    <div className="mb-4 p-4 bg-white rounded shadow-md">
      <div className="flex items-center mb-4">
        <img src={post.userImage} alt={post.userName} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <h3 className="font-bold">{post.userName} Naruto</h3>
          <p className="text-gray-600">{post.userTitle} this is title</p>
        </div>
      </div>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt="Post content" className="mt-4 rounded" />}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600 hover:text-primary">
            <FaThumbsUp className="mr-2" /> Like
          </button>
          <button className="flex items-center text-gray-600 hover:text-primary">
            <FaComment className="mr-2" /> Comment
          </button>
          <button className="flex items-center text-gray-600 hover:text-primary">
            <FaShare className="mr-2" /> Repost
          </button>
        </div>
        <button className="flex items-center text-gray-600 hover:text-primary">
          <FaPaperPlane className="mr-2" /> Share
        </button>
      </div>
    </div>
  );
};

export default Post;
