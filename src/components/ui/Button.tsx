import Link from "next/link";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export default function Button({ text, onClick, className = '', href }: ButtonProps) {
  const buttonContent = (
      <button
          onClick={onClick}
          className={`bg-gradient-to-r from-blue-400 to-blue-600 hover:from-[#5D2BA6] hover:to-[#7E39EA] text-white py-6 px-8 rounded-lg font-mono 
          transition-colors duration-200 
          shadow-lg text-center w-[325px] ${className}`}
      >
          {text}
      </button>
  );

  return href ? (
      <Link href={href}>
          {buttonContent}
      </Link>
  ) : (
      buttonContent
  );
}