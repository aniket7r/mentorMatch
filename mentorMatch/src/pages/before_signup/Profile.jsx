import React from 'react';
import Navbar from '../../components/before_signup/common/Navbar/Navbar';
import ProfileHeader from '../../components/before_signup/specific/Profile/ProfileHeader';
import ProfileInfo from '../../components/before_signup/specific/Profile/ProfileInfo';
import ProfileBio from '../../components/before_signup/specific/Profile/ProfileBio';
import MentorshipPreferences from '../../components/before_signup/specific/Profile/MentorshipPreferences';
import AchievementsCertifications from '../../components/before_signup/specific/Profile/AchievementsCertifications';
import ConnectedMentorsMentees from '../../components/before_signup/specific/Profile/ConnectedMentorsMentees';
import UserReviews from '../../components/before_signup/specific/Profile/UserReviews';
import UpdateProfileForm from '../../components/before_signup/specific/Profile/UpdateProfileForm';
import FAQ from '../../components/before_signup/specific/Profile/FAQ';
import ContactSupport from '../../components/before_signup/specific/Profile/ContactSupport';
import Footer from '../../components/before_signup/common/Footer/Footer';

const Profile = () => {
  return (
    <div>
      <Navbar />
      <ProfileHeader />
      <ProfileInfo />
      <ProfileBio />
      <MentorshipPreferences />
      <AchievementsCertifications />
      <ConnectedMentorsMentees />
      <UserReviews />
      <UpdateProfileForm />
      <FAQ />
      <ContactSupport />
      <Footer />
    </div>
  );
}

export default Profile;
