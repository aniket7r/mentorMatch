import React from 'react';
import comapnyOverviewImage from "../../../../assets/image/If-Youre-a-Good-Leader-Youre-Not-Doing-It-All.jpg"
const CompanyOverview = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
        <p className="text-xl mb-6 text-gray-800">
        At Ascend, we believe in the power of mentorship and the incredible potential within each individual. Our mission is to create a collaborative community where everyone can be both a mentor and a mentee, fostering growth, learning, and mutual support.
        </p>
        <div className="w-full h-81 bg-gray-200 mx-auto">
          <img src={comapnyOverviewImage} alt="companyOvverview Image" className='w-full h-full object-cover'/>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverview;
