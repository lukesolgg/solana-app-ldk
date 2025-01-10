"use client";
import { useState } from 'react';
import HeaderIcons from '../../components/ui/HeaderIcons';

export default function SwapPage() {
  const [selectedBox, setSelectedBox] = useState<'SOL' | 'USDC' | null>(null);
  const [solAmount, setSolAmount] = useState('0');
  const [usdcAmount, setUsdcAmount] = useState('0');
  const [isReversed, setIsReversed] = useState(false);

  const handleNumberClick = (num: string) => {
    if (!selectedBox) return;
    
    const currentAmount = selectedBox === 'SOL' ? solAmount : usdcAmount;
    const newAmount = currentAmount === '0' ? num : currentAmount + num;
    
    if (selectedBox === 'SOL') {
      setSolAmount(newAmount);
    } else {
      setUsdcAmount(newAmount);
    }
  };

  const CurrencyBox = ({ type }: { type: 'SOL' | 'USDC' }) => (
    <div 
      className={`bg-[#3a0066] mt-16 p-4 rounded-lg shadow-lg cursor-pointer ${
        selectedBox === type ? 'ring-2 ring-blue-500' : ''
      }`}
      onClick={() => setSelectedBox(type)}
    >
      <div className="flex justify-between">
        <div>
          <h2 className="text-white text-xl">{type}</h2>
          <p className="text-gray-400 text-sm">
            Balance: {type === 'SOL' ? '1.50 SOL' : '1,536 USDC'}
          </p>
        </div>
        <div className="text-right">
          <p className="text-white text-xl">
            {type === 'SOL' ? solAmount : usdcAmount}
          </p>
          <p className="text-gray-400">$0.00</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#290055] flex flex-col">
      <div className="relative">
        <img 
          src="/background.png" 
          alt="background" 
          className="absolute inset-0 w-full h-full object-cover opacity-10" 
        />
        <img 
          src="/noise.png" 
          alt="noise" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <img 
          src="/grid.png" 
          alt="grid" 
          className="z-10"
        />
      </div>

      <HeaderIcons />

      <div className="flex flex-col px-4 h-full">
  <div className="space-y-6 my-4">
    {/* First Currency Box */}
    {isReversed ? <CurrencyBox type="USDC" /> : <CurrencyBox type="SOL" />}
    
    {/* Centered Swap Button */}
    <div className="flex justify-center">
      <button 
        onClick={() => setIsReversed(!isReversed)}
        className="bg-[#3a0066] rounded-full shadow-lg hover:bg-[#4a0086] transition-colors"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" 
          />
        </svg>
      </button>
    </div>

    {/* Second Currency Box */}
    {isReversed ? <CurrencyBox type="SOL" /> : <CurrencyBox type="USDC" />}
  </div>

         {/* Confirm Button */}
         <button
          onClick={() => console.log('Swap confirmed')}
          className="w-full bg-gradient-to-r from-[#4C1D95] to-[#6D28D9] text-white font-bold py-4 px-6 rounded-lg shadow-lg my-2"
        >
          Confirm Swap
        </button>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num.toString())}
              className="bg-[#3a0066] text-white rounded-lg shadow-lg text-lg h-[70px]"
            >
              {num}
            </button>
          ))}
          <button 
            className="bg-[#3a0066] text-white rounded-lg shadow-lg h-[70px]"
            onClick={() => {
              if (selectedBox === 'SOL') setSolAmount('0');
              if (selectedBox === 'USDC') setUsdcAmount('0');
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}