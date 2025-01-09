import React from 'react';
import Image from 'next/image';
import Logosol from '../../assets/images/Logosol.png';
import HeaderIcons from '@/components/ui/HeaderIcons';

const InvitePage = () => {
  return (
    <div className="min-h-screen bg-[#290055] flex flex-col">
      {/* Small Logo */}
      <div className="flex justify-center py-6">
        <Image
          src={Logosol}
          alt="Logo"
          width={40}
          height={40}
          className="z-10"
        />
      </div>

      <HeaderIcons />

      {/* Main Content */}
      <div className="px-4 flex-1 flex flex-col">
        {/* Header Box */}
        <div className="bg-[#3a0066] rounded-lg shadow-lg p-6 mb-12">
          <h1 className="text-white text-xl text-center mb-6">Referral Program</h1>
          
          {/* Button Container */}
          <div className="flex gap-4">
            <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg shadow-lg">
              Create
            </button>
            <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg shadow-lg">
              Share
            </button>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <Image
            src={Logosol}
            alt="Logo"
            width={200}
            height={80}
            className="mb-8"
            priority
          />
          
          {/* Text Content */}
          <p className="text-white text-lg text-center mb-2">
            You haven't created an invite link yet!
          </p>
          <p className="text-gray-400 text-center">
            Help your friends get started on SOL
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvitePage;