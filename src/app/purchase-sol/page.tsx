import React from 'react';
import Image from 'next/image';
import Logosol from '../../assets/images/Logosol.png';
import { Trash2 } from 'lucide-react';
import HeaderIcons from '@/components/ui/HeaderIcons';

export default function PurchaseSol() {
  return (
    <div className="min-h-screen bg-[#290055] flex flex-col">
      {/* Header with Logo */}
      <div className="flex justify-center py-4">
        <Image
          src={Logosol}
          alt="Logo"
          width={40}
          height={40}
          className="z-10"
        />
      </div>

      <HeaderIcons />

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col px-4">
        {/* Headings */}
        <h1 className="text-white text-2xl text-center mb-1">Purchase SOL Instantly</h1>
        <p className="text-gray-400 text-center mb-4">1 SOL = 171 GBP</p>

        {/* Currency Box */}
        <div className="bg-[#3a0066] p-4 rounded-lg shadow-lg mb-4">
          <div className="flex flex-col items-center">
            <div className="mb-1">
              <span className="text-white text-xl">40 GBP</span>
            </div>
            <div className="text-gray-400">= 0.23 SOL</div>
          </div>
        </div>

        {/* Quick Amount Buttons */}
        <div className="flex justify-between gap-3 mb-4">
          {['£100', '£250', '£1000'].map((amount) => (
            <button key={amount} className="flex-1 bg-[#3a0066] py-2 text-white rounded-lg shadow-lg">
              {amount}
            </button>
          ))}
        </div>

        {/* Buy Button */}
        <button className="w-full py-2.5 bg-blue-500 text-white rounded-lg shadow-lg mb-4">
          Buy SOL
        </button>

        {/* Centered Keypad */}
        <div className="flex justify-center pb-16">
          <div className="grid grid-cols-3 gap-2 w-full max-w-[260px]">
            {[1,2,3,4,5,6,7,8,9,0,'.'].map((num) => (
              <button key={num} className="bg-[#3a0066] aspect-square text-white rounded-lg shadow-lg text-lg">
                {num}
              </button>
            ))}
            <button className="bg-[#3a0066] aspect-square text-white rounded-lg shadow-lg">
              <Trash2 className="mx-auto" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}