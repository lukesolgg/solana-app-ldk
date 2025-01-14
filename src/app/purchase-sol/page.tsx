"use client";
import { useState } from 'react';
import { X, Trash2, Delete } from 'lucide-react';
import HeaderIcons from '@/components/ui/HeaderIcons';
import Navigation from '@/components/Navigation';

export default function PurchaseSol() {
  const [amount, setAmount] = useState('0');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleNumberClick = (num: string) => {
    // Handle decimal point
    if (num === '.') {
      if (amount.includes('.')) return;
      const newAmount = amount === '0' ? '0.' : amount + '.';
      setAmount(newAmount);
      return;
    }

    // Handle numbers
    const newAmount = amount === '0' ? num : amount + num;
    setAmount(newAmount);
  };

  const handleQuickAmount = (value: string) => {
    setAmount(value.replace('£', ''));
  };

  const handleConfirm = () => {
    if (amount === '0') {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    setIsConfirmed(true);
    setAmount('0');
    setTimeout(() => setIsConfirmed(false), 5000);
  };

  const solAmount = (parseFloat(amount) / 171).toFixed(3);

  return (
    <div className={`min-h-screen bg-[#290055] flex flex-col`}>
      <HeaderIcons />

      <div className="mt-24 px-4 flex flex-col h-full">
        <h1 className="font-space-mono text-white text-2xl text-center mb-2 mt-4">
          Purchase SOL Instantly
        </h1>
        <p className="text-gray-400 text-center mb-6">1 SOL = 171 GBP</p>

        {/* Updated Currency Box */}
        <div className="bg-[#2c0a46] p-4 rounded-lg shadow-lg mb-6">
          <div className="flex flex-col items-center">
            <div className="mb-1">
              <span className="text-white text-xl">{amount} GBP</span>
            </div>
            <div className="text-gray-400">= {solAmount} SOL</div>
          </div>
        </div>

        

        {/* Buy Button */}
        <button 
          className={`w-full  py-4 px-6 font-bold  ${
            isConfirmed ? 'bg-green-500' : 'bg-gradient-to-r from-blue-400 to-blue-600 hover:from-[#5D2BA6] hover:to-[#7E39EA]'
          } text-white rounded-lg shadow-lg mb-6`}
          onClick={handleConfirm}
        >
          {isConfirmed ? 'Confirmed!' : amount === '0' ? 'Enter Amount' : 'Buy SOL'}
        </button>

        {/* Quick Amount Buttons */}
        <div className="flex justify-between gap-3 mb-6">
          {['£100', '£250', '£1000'].map((amt) => (
            <button 
              key={amt} 
              className="flex-1 bg-[#2c0a46] text-white rounded-lg font-bold py-2"
              onClick={() => handleQuickAmount(amt)}
            >
              {amt}
            </button>
          ))}
        </div>

        {/* Keypad */}
        <div className="mt-auto pb-4 h-[50vh]">
          <div className="grid grid-cols-3 gap-2">
            {[1,2,3,4,5,6,7,8,9,'.',0].map((num) => (
              <button 
                key={num} 
                className=" bg-[#3a0066]/30 text-white rounded-lg text-4xl font-extrabold h-[70px]"
                onClick={() => handleNumberClick(num.toString())}
              >
                {num}
              </button>
            ))}
            <button 
              className="bg-[#3a0066]/30 text-white rounded-lg font-extrabold h-[70px] flex items-center justify-center"
              onClick={() => setAmount('0')}
            >
              <Delete className="mx-auto" size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Popup notifications */}
      {isConfirmed && (
        <div className="fixed top-16 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fadeIn flex items-center justify-between gap-4">
          <span>Transaction confirmed!</span>
          <button 
            onClick={() => setIsConfirmed(false)}
            className="hover:bg-green-600 rounded-full p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      {showError && (
        <div className="fixed top-16 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fadeIn flex items-center justify-between gap-4">
          <span>Please Enter Amount & Try Again</span>
          <button 
            onClick={() => setShowError(false)}
            className="hover:bg-red-600 rounded-full p-1"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      <Navigation />
    </div>
  );
}