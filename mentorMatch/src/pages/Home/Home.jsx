import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Feed from '../../components/Feed/Feed';
import Footer from '../../components/Footer/Footer';
import PostCreation from '../../components/Post/PostCreation';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <PostCreation />
        <Feed />
        {/* <MatchList /> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
