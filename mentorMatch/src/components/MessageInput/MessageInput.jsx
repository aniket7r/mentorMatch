import React from 'react';

const MessageInput = () => {
  return (
    <div className="w-3/4 p-4">
      <form className="flex">
        <input type="text" className="w-full p-2 border rounded-l" placeholder="Type a message..." />
        <button type="submit" className="bg-accent text-white p-2 rounded-r">Send</button>
      </form>
    </div>
  );
};

export default MessageInput;
