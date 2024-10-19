import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import MatchingIntroduction from '../../components/MatchingIntroduction/MatchingIntroduction';
import MatchingAlgorithm from '../../components/MatchingAlgorithm/MatchingAlgorithm';
import MatchList from '../../components/MatchList/MatchList';
import MatchingGuide from '../../components/MatchingGuide/MatchingGuide';
import Recommendations from '../../components/Recommendations/Recommendations';
import PreferencesForm from '../../components/PreferencesForm/PreferencesForm';
import FAQ from '../../components/FAQ/FAQ';

const MentorMatching = () => {
  return (
    <>
      <Navbar />
      <MatchList />
      {/* <MatchingGuide /> */}
      {/* <Recommendations />
      <PreferencesForm /> */}
      {/* <FAQ /> */}
      <Footer />
    </>
  );
};

export default MentorMatching;
