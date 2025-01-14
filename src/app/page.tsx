import Image from 'next/image';
import Background from '../assets/images/mainbgbg.png';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';
import HeaderIcons from '@/components/ui/HeaderIcons';
import SubHeading from '@/components/ui/SubHeading';

export default function Home() {
  return (
    <div className="relative">
      <Image
        src={Background}
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
        quality={100}
      />
      
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#290055] via-[#290055] to-transparent z-0" />
      
      <div className="min-h-screen flex flex-col">
        <HeaderIcons />
        
        <div className="flex-1 flex flex-col items-center justify-center mt-36">
        
          {/* Text Content */}
          <Heading text="Welcome to the Home of LDK" className="mb-4 z-10" />
          <SubHeading text="Purchase SOL, Swap Crypto with Friends" className="mb-16 z-10" />

          {/* Buttons Container */}
          <div className="flex flex-col items-center gap-4 px-4 z-10">
            <Button text="Purchase SOL" href="/purchase-sol"/>
            <Button text="Swap Cryptocurrencies" href="/swap" />
            <Button text="Invite Friends" href="/invite" />
          </div>
        </div>
      </div>
    </div>
  );
}