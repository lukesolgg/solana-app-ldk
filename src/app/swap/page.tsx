"use client";
import { useState, useEffect } from 'react';
import HeaderIcons from '../../components/ui/HeaderIcons';
import { ArrowUpDown, X } from 'lucide-react';

type Currency = {
  symbol: string;
  balance: string;
};

const currencies: Currency[] = [
  { symbol: 'SOL', balance: '11.50' },
  { symbol: 'USDC', balance: '21,536' },
  { symbol: 'JUP', balance: '245,340.30' },
  { symbol: 'GIGA', balance: '51.52' },
  { symbol: 'LOCKIN', balance: '3,311,780.05' }
];

const tokenPrices: { [key: string]: number } = {
  'SOL': 175,
  'USDC': 1,
  'JUP': 1,
  'GIGA': 0.07,
  'LOCKIN': 0.03
};

export default function SwapPage() {
  const [selectedBox, setSelectedBox] = useState<string | null>('top');
  const [amount1, setAmount1] = useState('0');
  const [amount2, setAmount2] = useState('0');
  const [currency1, setCurrency1] = useState(currencies[0]);
  const [currency2, setCurrency2] = useState(currencies[1]);
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showError, setShowError] = useState(false);

  const convertAmount = (amount: string, from: Currency, to: Currency) => {
    if (amount === '' || amount === '0') return '0';
    const fromPrice = tokenPrices[from.symbol];
    const toPrice = tokenPrices[to.symbol];
    const fromValueUSD = parseFloat(amount) * fromPrice;
    const convertedAmount = (fromValueUSD / toPrice).toFixed(6);
    // Remove trailing zeros after decimal
    return convertedAmount.replace(/\.?0+$/, '');
  };

  const handleNumberClick = (num: string) => {
    if (!selectedBox) return;
    
    const currentAmount = selectedBox === 'top' ? amount1 : amount2;
    const setAmount = selectedBox === 'top' ? setAmount1 : setAmount2;
    const otherSetAmount = selectedBox === 'top' ? setAmount2 : setAmount1;
    const fromCurrency = selectedBox === 'top' ? currency1 : currency2;
    const toCurrency = selectedBox === 'top' ? currency2 : currency1;
  
    // Handle decimal point
    if (num === '.') {
      if (currentAmount.includes('.')) return;
      const newAmount = currentAmount === '0' ? '0.' : currentAmount + '.';
      setAmount(newAmount);
      otherSetAmount(convertAmount(newAmount, fromCurrency, toCurrency));
      return;
    }
  
    // Handle numbers
    const newAmount = currentAmount === '0' ? num : currentAmount + num;
    setAmount(newAmount);
    otherSetAmount(convertAmount(newAmount, fromCurrency, toCurrency));
  };

  useEffect(() => {
    if (selectedBox === 'top') {
      setAmount2(convertAmount(amount1, currency1, currency2));
    } else if (selectedBox === 'bottom') {
      setAmount1(convertAmount(amount2, currency2, currency1));
    }
  }, [currency1, currency2]);

  const handleConfirm = () => {
    if (amount1 === '0' && amount2 === '0') {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
    setIsConfirmed(true);
    // Reset values
    setAmount1('0');
    setAmount2('0');
    setSelectedBox(null);
    setTimeout(() => setIsConfirmed(false), 5000);
  };

  const handleSwap = () => {
    // Swap currencies
    const tempCurrency = currency1;
    setCurrency1(currency2);
    setCurrency2(tempCurrency);
  
    // Swap amounts
    const tempAmount = amount1;
    setAmount1(amount2);
    setAmount2(tempAmount);
  
    // Update selected box if one is selected
    if (selectedBox === 'top') {
      setSelectedBox('bottom');
    } else if (selectedBox === 'bottom') {
      setSelectedBox('top');
    }
  };


  const CurrencyBox = ({ position }: { position: 'top' | 'bottom' }) => {
    const isTop = position === 'top';
    const currentCurrency = isTop ? currency1 : currency2;
    const setCurrentCurrency = isTop ? setCurrency1 : setCurrency2;
    const dropdownVisible = isTop ? showDropdown1 : showDropdown2;
    const setDropdownVisible = isTop ? setShowDropdown1 : setShowDropdown2;
    const currentAmount = isTop ? amount1 : amount2;

    return (
      <div className="relative mt-16">
      <div 
        className={`bg-[#2c0a46] p-4 py-6 rounded-lg shadow-lg cursor-pointer ${
          selectedBox === position ? 'ring-2 ring-blue-900' : ''
        }`}
        onClick={() => setSelectedBox(position)}
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white text-xl">{currentCurrency.symbol}</span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setDropdownVisible(!dropdownVisible);
              }}
              className="ml-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="text-right">
            <p className="text-white text-xl">{currentAmount}</p>
            <span className="text-gray-400">Balance: {currentCurrency.balance}</span>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {dropdownVisible && (
        <div className="absolute mt-2 w-full bg-[#3a0066] rounded-lg shadow-xl z-50">
          {currencies.map((curr) => (
            <button
              key={curr.symbol}
              className="w-full px-4 py-2 text-left text-white hover:bg-[#4a0086] first:rounded-t-lg last:rounded-b-lg"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentCurrency(curr);
                setDropdownVisible(false);
              }}
            >
              {curr.symbol} - {curr.balance}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

  return (
    <div className="min-h-screen bg-[#290055] flex flex-col">
      <div className="relative">
        <img 
          src="/background.png" 
          alt="background" 
          className="absolute inset-0 w-full h-full object-cover opacity-10" 
        />
      </div>

      <HeaderIcons />

      <div className="flex flex-col px-4 h-full">
        <div className="space-y-4 my-4">
          {/* First Currency Box */}
          <CurrencyBox position="top" />
          
          {/* Centered Swap Button */}
          <div className="flex justify-center">
  <button 
    onClick={handleSwap}
    className="bg-[#3a0066] p-2 rounded-full shadow-lg hover:bg-[#4a0086] transition-colors"
  >
    <ArrowUpDown className="h-6 w-6 text-blue-600" />
  </button>
</div>

          {/* Second Currency Box */}
          <CurrencyBox position="bottom" />
        </div>

        {/* Confirm Button */}
        <>
        <button
  onClick={handleConfirm}
  className={`w-full font-bold text-white py-4 px-6 rounded-lg shadow-lg my-2 transition-colors duration-300 ${
    isConfirmed 
      ? 'bg-green-500 hover:bg-green-600' 
      : 'bg-gradient-to-r from-blue-400 to-blue-600 hover:from-[#5D2BA6] hover:to-[#7E39EA]'
  }`}
>
  {isConfirmed 
    ? 'Confirmed!' 
    : amount1 === '0' && amount2 === '0' 
      ? 'Enter Amount' 
      : 'Confirm Swap'
  }
</button>

  {/* Popup notification */}
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
</>

        {/* Keypad section */}
<div className="grid grid-cols-3 gap-2 mt-4">
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'].map((num) => (
    <button
      key={num}
      onClick={() => handleNumberClick(num.toString())}
      className="bg-[#3a0066]/20 text-white rounded-lg text-4xl font-extrabold h-[70px]"
    >
      {num}
    </button>
  ))}
  <button 
    className="bg-[#3a0066]/20 text-white rounded-lg font-extrabold h-[70px]"
    onClick={() => {
      setAmount1('0');
      setAmount2('0');
    }}
  >
    CLEAR
  </button>
</div>
      </div>
    </div>
  );
}
