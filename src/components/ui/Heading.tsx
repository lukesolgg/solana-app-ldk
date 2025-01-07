interface HeadingProps {
    text: string;
    className?: string;
  }
  
  export default function Heading({ text, className = '' }: HeadingProps) {
    return (
      <h1 className={`text-3xl font-mono text-white text-center ${className}`}>
        {text}
      </h1>
    );
  }