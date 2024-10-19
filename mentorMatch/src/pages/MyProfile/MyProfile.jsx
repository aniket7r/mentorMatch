// import React, { useState } from 'react';
// import ProfileHeader from './ProfileHeader';
// import SummarySection from './SummarySection';
// import SectionCard from './SectionCard';
// import ProfileModal from './ProfileModal';
// import Navbar from '../../components/Navbar/Navbar';
// // ../../components/before_signup/common/Navbar/Navbar
// const Profile = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div>
//       <Navbar />
//     <div className="bg-gray-100 p-6">
//       <ProfileHeader />
//       <SummarySection />
//       <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
//         <SectionCard
//           title="Portfolio"
//           description="No portfolio items have been added yet."
//           onAddClick={toggleModal}
//         />
//         <SectionCard
//           title="Reviews"
//           description="No reviews to see here!"
//           onAddClick={toggleModal}
//         />
//         <SectionCard
//           title="Experience"
//           description="No experiences have been added."
//           onAddClick={toggleModal}
//         />
//         <SectionCard
//           title="Education"
//           description="No education information has been added."
//           onAddClick={toggleModal}
//         />
//         <SectionCard
//           title="Qualifications"
//           description="No qualifications have been added."
//           onAddClick={toggleModal}
//         />
//         <SectionCard
//           title="Certifications"
//           description="No certifications have been added."
//           onAddClick={toggleModal}
//         />
//         <SectionCard
//           title="Articles"
//           description="No articles have been added."
//           onAddClick={toggleModal}
//         />
//       </div>
//       <ProfileModal isOpen={isModalOpen} onClose={toggleModal} />
//     </div>
//     </div>
//   );
// };

// export default Profile;






import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import SummarySection from './SummarySection';
import SectionCard from './SectionCard';
import ProfileModal from './ProfileModal';
import Navbar from '../../components/Navbar/Navbar';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileInfo, setProfileInfo] = useState({
    firstName: 'Aniket',
    lastName: 'Kumar',
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSaveProfile = (data) => {
    setProfileInfo({
      firstName: data.firstName,
      lastName: data.lastName,
    });
    toggleModal();
  };

  const handleUploadCoverPhoto = () => {
    // Logic to open file dialog and upload cover photo
  };

  const handleUploadProfilePhoto = () => {
    // Logic to open file dialog and upload profile photo
  };

  return (
    <div>
      <Navbar />
    <div className="bg-gray-100 p-6">
      <ProfileHeader
        onEditProfile={toggleModal}
        onUploadCoverPhoto={handleUploadCoverPhoto}
        onUploadProfilePhoto={handleUploadProfilePhoto}
      />
      <SummarySection />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <SectionCard
          title="Portfolio"
          description="No portfolio items have been added yet."
          onAddClick={toggleModal}
        />
        <SectionCard
          title="Reviews"
          description="No reviews to see here!"
          onAddClick={toggleModal}
        />
        <SectionCard
          title="Experience"
          description="No experiences have been added."
          onAddClick={toggleModal}
        />
        <SectionCard
          title="Education"
          description="No education information has been added."
          onAddClick={toggleModal}
        />
        <SectionCard
          title="Qualifications"
          description="No qualifications have been added."
          onAddClick={toggleModal}
        />
        <SectionCard
          title="Certifications"
          description="No certifications have been added."
          onAddClick={toggleModal}
        />
        <SectionCard
          title="Articles"
          description="No articles have been added."
          onAddClick={toggleModal}
        />
      </div>
      <ProfileModal isOpen={isModalOpen} onClose={toggleModal} onSave={handleSaveProfile} />
    </div>
    </div> 
  );
};

export default Profile;
