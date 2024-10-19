// import React from 'react';
// import { Link } from 'react-router-dom';

// const MessagesHeader = ({ activeTab, setActiveTab }) => {
//   return (
//     <header className="bg-blue-600 text-white py-4">
//       <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
//         <div className="text-2xl font-bold mb-4 sm:mb-0">Messages</div>
//         <div className="flex space-x-4">
//           <button
//             onClick={() => setActiveTab('mentors')}
//             className={`py-2 px-4 ${activeTab === 'mentors' ? 'bg-blue-800' : 'bg-blue-600'} hover:bg-blue-700 rounded transition-colors duration-200`}
//           >
//             Mentors
//           </button>
//           <button
//             onClick={() => setActiveTab('mentees')}
//             className={`py-2 px-4 ${activeTab === 'mentees' ? 'bg-blue-800' : 'bg-blue-600'} hover:bg-blue-700 rounded transition-colors duration-200`}
//           >
//             Mentees
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default MessagesHeader;





import React from 'react';
import { Link } from 'react-router-dom';

const MessagesHeader = ({ activeTab }) => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-2xl font-bold mb-4 sm:mb-0">Messages</div>
        <div className="flex space-x-4">
          <Link
            to="/messages/mentors"
            className={`py-2 px-4 ${activeTab === 'mentors' ? 'bg-blue-800' : 'bg-blue-600'} hover:bg-blue-700 rounded transition-colors duration-200`}
          >
            Mentors
          </Link>
          <Link
            to="/messages/mentees"
            className={`py-2 px-4 ${activeTab === 'mentees' ? 'bg-blue-800' : 'bg-blue-600'} hover:bg-blue-700 rounded transition-colors duration-200`}
          >
            Mentees
          </Link>
        </div>
      </div>
    </header>
  );
}

export default MessagesHeader;
