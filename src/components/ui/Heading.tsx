interface HeadingProps {
    text: string;
    className?: string;
  }
  
  export default function Heading({ text, className = '' }: HeadingProps) {
    return (
      <h1 className={`text-xl md:text-3xl mb-2 md:mb-4 font-mono text-white text-center ${className}`}>
        {text}
      </h1>
    );
  }