const ProfileIcon = () => (
    <div className="absolute top-8 left-8 z-10">
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
        <span className="text-white font-bold drop-shadow-lg">LK</span>
      </div>
    </div>
  );
  
  const SearchIcon = () => (
    <div className="absolute top-8 right-8 z-10">
      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="white" 
          className="w-5 h-5 drop-shadow-lg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" 
          />
        </svg>
      </div>
    </div>
  );
  
  export default function HeaderIcons() {
    return (
      <>
        <ProfileIcon />
        <SearchIcon />
      </>
    );
  }