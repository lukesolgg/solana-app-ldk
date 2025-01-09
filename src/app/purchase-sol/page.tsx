import React from 'react';
import Image from 'next/image';
import Logosol from '../../assets/images/Logosol.png';
import { Trash2 } from 'lucide-react';
import HeaderIcons from '@/components/ui/HeaderIcons';

export default function PurchaseSol() {
  return (
    <div className="min-h-screen bg-[#290055] flex flex-col">
      {/* Header with Logo */}
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

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col px-4">

        {/* Currency Boxes */}
        <div className="space-y-6">
          <div className="bg-[#3a0066] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between">
              <div>
                <h2 className="text-white text-xl">SOL</h2>
                <p className="text-gray-400 text-sm">Balance: 1.50 SOL</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">0</p>
                <p className="text-gray-400">$0.00</p>
              </div>
            </div>
          </div>

          <div className="bg-[#3a0066] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between">
              <div>
                <h2 className="text-white text-xl">USDC</h2>
                <p className="text-gray-400 text-sm">Balance: 1,536 USDC</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400">0</p>
                <p className="text-gray-400">$0.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enter Amount Button */}
        <div className="mt-8">
          <button className="w-full py-3 bg-blue-500 text-white rounded-lg shadow-lg">
            Enter Amount Above
          </button>
        </div>

        {/* Keypad Section - Bottom 50% */}
        <div className="flex mt-auto gap-4 h-[50vh] pb-20">
          {/* Number Pad */}
          <div className="grid grid-cols-3 gap-3 flex-1">
            {[1,2,3,4,5,6,7,8,9,0,'.'].map((num) => (
              <button key={num} className="bg-[#3a0066] text-white rounded-lg shadow-lg text-xl">
                {num}
              </button>
            ))}
            <button className="bg-[#3a0066] text-white rounded-lg shadow-lg">
              <Trash2 className="mx-auto" size={24} />
            </button>
          </div>

          {/* Right Side Buttons */}
          <div className="flex flex-col gap-3 w-24">
            {['MAX', '75%', '50%', 'CLEAR'].map((text) => (
              <button key={text} className="bg-[#3a0066] h-full text-white rounded-lg shadow-lg text-sm font-medium">
                {text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}