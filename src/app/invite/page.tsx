"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Logosol from '../../assets/images/Logosol.png';
import HeaderIcons from '@/components/ui/HeaderIcons';
import { Check } from 'lucide-react';

const InvitePage = () => {
  const [showCopied, setShowCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText('https://your-website-url.com');
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

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
        <div className="bg-[#2c0a46] rounded-lg shadow-lg p-6 mt-12">
          <h1 className="text-white text-xl text-center mb-6">Referral Program</h1>
          
          {/* Button Container */}
          <div className="flex gap-4">
            <button className="flex-1 bg-gradient-to-tr from-blue-400 to-blue-600 hover:from-[#5D2BA6] hover:to-[#7E39EA] text-white py-3 rounded-lg shadow-lg">
              Create
            </button>
            <button 
              onClick={handleShare}
              className="flex-1 bg-gradient-to-tr from-blue-400 to-blue-600 hover:from-[#5D2BA6] hover:to-[#7E39EA] text-white py-3 rounded-lg shadow-lg"
            >
              Share
            </button>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-4">
          <Image
            src={Logosol}
            alt="Logo"
            width={120}
            height={120}
            className="opacity-80"
          />
          <div className="text-center">
            <p className="text-white text-xl font-semibold mb-2">
              You haven't created an invite link yet!
            </p>
            <p className="text-gray-400 text-lg">
              Help your friends get started on SOL
            </p>
          </div>
        </div>
      </div>

      {/* Copy Popup */}
      {showCopied && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-gray-800/90 text-white px-6 py-3 rounded-lg shadow-lg
                      flex items-center gap-2 animate-fadeIn z-50">
          <Check size={20} className="text-green-500" />
          <span>Link Copied</span>
        </div>
      )}
    </div>
  );
};

export default InvitePage;