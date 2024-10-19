// // //LandingPage_PS is the landing page for after signin/signup


// // import React from 'react';
// // import Navbar from '../components/Navbar';
// // import ProfileSection from '../components/ProfileSection';
// // import MatchesSection from '../components/MatchesSection';
// // import '../styles/Home.css';
// // import { styled } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import Paper from '@mui/material/Paper';
// // import Grid from '@mui/material/Unstable_Grid2';

// // const Item = styled(Paper)(({ theme }) => ({
// //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
// //     ...theme.typography.body2,
// //     padding: theme.spacing(1),
// //     textAlign: 'center',
// //     color: theme.palette.text.secondary,
// //   }));
  

// // const LandingPage = () => {
// //     return (
// //         <div className="landing-page">
// //             <Navbar />
// //         <Box sx={{ flexGrow: 1 }}>
// //             <Grid container spacing={3}>
// //                 <Grid xs="auto">
// //                 <Item>
// //                 <div className="middle-section">
// //                     <ProfileSection />
// //                 </div>
// //                 </Item>
// //                 </Grid>
// //                 <Grid xs={10}>
// //                 <Item>
// //                 <div className="right">
// //                     <MatchesSection />
// //                 </div>
// //                 </Item>
// //                 </Grid>
// //             </Grid>
// //             </Box>

// //             <div className='switch-connections'>
// //                 <div>

// //                 </div>
// //             </div>
// //             <div className="landing">
                
               
// //             </div>
// //         </div>
// //     );
// // };

// // export default LandingPage;



import React from 'react';
import '../.././src/index.css'
import MatchesSection from '../components/MatchesSection';
import Navbar from '../components/Navbar';
import NotificationsSection from '../components/NotificationsSection';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
        
        <div className="md:w-1/5 p-4 bg-gray-200 flex-shrink-0">
          <div className="bg-white p-4 mb-4">
            <h2 className="font-bold mb-4">Manage my network</h2>
            <ul>
              <li>Connections</li>
              <a href='/connections/mentors'><li>Mentors</li></a>
              <a href='/connections/mentes'><li>Mentes</li></a>
              <a href='/connections/follwing'><li>Following</li></a>
              <a href='/connections/followers'><li>Followers</li></a>
            </ul>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="md:w-4/5 p-4 gap-y-2 flex-grow overflow-y-auto">
          <Card>
          <div className="bg-white p-4 mb-4">
            <h2 className="font-bold">Invitations</h2>
            <div className="mt-4">
              <h3 className="font-bold">Job search smarter</h3>
              <div className="overflow-y-auto" style={{ maxHeight: '20vh' }}>
                <NotificationsSection />
              </div>
            </div>
          </div>
          </Card>
          <br />
          <Card>
          <div className="bg-white p-8">
            <h2 className="font-bold">People who match with you</h2>
            <div className="overflow-y-auto" style={{ maxHeight: '50vh' }}>
              {/* Scrollable Matches Section */}
              <MatchesSection />
            </div>
          </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default LandingPage;




