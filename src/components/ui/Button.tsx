interface ButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
  }
  
  export default function Button({ text, onClick, className = '' }: ButtonProps) {
    return (
      <button
        onClick={onClick}
        className={`bg-blue-500 text-white py-3 px-6 rounded-lg font-mono 
        hover:bg-blue-600 transition-colors duration-200 
        shadow-lg text-center w-full max-w-xs ${className}`}
      >
        {text}
      </button>
    );
  }