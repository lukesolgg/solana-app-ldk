import Image from "next/image";
import Logosol from "../../assets/images/Logosol.png";
import { Search } from "lucide-react";

const ProfileIcon = () => (
    <div className="absolute top-6 left-8 z-10">
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
        <span className="text-white font-bold drop-shadow-lg">LK</span>
      </div>
    </div>
  );
  
  const SearchIcon = () => (
    <div className="absolute top-6 right-8 z-10">
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
        <Search className="w-5 h-5 text-white drop-shadow-lg" />
      </div>
    </div>
  );

  const LogoIcon = () => (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
      <Image 
        src={Logosol}
        alt="Solana Logo"
        width={40}
        height={40}
        className="drop-shadow-lg"
      />
    </div>
  );
  
  export default function HeaderIcons() {
    return (
      <>
        <ProfileIcon />
        <LogoIcon />
        <SearchIcon />
      </>
    );
  }