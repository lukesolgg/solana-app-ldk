import Image from 'next/image';
import Logosol from '../assets/images/Logosol.png';
import Background1 from '../assets/images/bgimagesol1 3.png';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <Image
        src={Background1}
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
        quality={100}
      />
      
      {/* Logo Container */}
      <div className="w-full flex justify-center mt-12 mb-8">
        <Image
          src={Logosol}
          alt="Logo"
          width={200}
          height={80}
          className="z-10"
          priority
        />
      </div>
    
      {/* Heading */}
      <Heading text="LDK SOL" className="mt-4" />

      {/* Buttons Container */}
      <div className="flex flex-col items-center gap-4 mt-8 px-4 z-10">
        <Button text="Purchase SOL" />
        <Button text="Receive SOL" />
        <Button text="Stake SOL" />
      </div>
    </div>
  );
}