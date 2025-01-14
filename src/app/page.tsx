import Image from 'next/image';
import Background from '../assets/images/mainbgbg.png';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import HeaderIcons from '@/components/ui/HeaderIcons';
import SubHeading from '@/components/ui/SubHeading';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
      <Image
        src={Background}
        alt="Background"
        fill
        priority
        className="object-cover"
        quality={100}
      />
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#290055] via-[#290055] to-transparent z-0" />
      
      <div className="min-h-screen flex flex-col">
        <HeaderIcons />
        
        <div className="flex-1 flex flex-col items-center justify-center mt-20 md:mt-36">
        
          {/* Text Content */}
          <Heading text="Welcome to the Home of LDK" className="z-10" />
          <SubHeading text="Purchase SOL, Swap Crypto with Friends" className="z-10" />

          {/* Buttons Container */}
          <div className="flex flex-col items-center gap-2 md:gap-4 px-3 md:px-4 z-10 w-full max-w-xs md:max-w-md">
            <Button text="Purchase SOL" href="/purchase-sol"/>
            <Button text="Swap Cryptocurrencies" href="/swap" />
            <Button text="Invite Friends" href="/invite" />
          </div>
        </div>
      </div>
      <Navigation />
    </div>
  );
}