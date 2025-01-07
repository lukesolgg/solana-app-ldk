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
          className={`bg-blue-500 text-white py-3 px-6 rounded-lg font-mono 
          hover:bg-blue-600 transition-colors duration-200 
          shadow-lg text-center w-[280px] ${className}`}
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