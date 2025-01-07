interface SubHeadingProps {
    text: string;
    className?: string;
}

export default function SubHeading({ text, className = '' }: SubHeadingProps) {
    return (
        <h2 className={`text-white text-center text-lg font-geo z-10 ${className}`}>
            {text}
        </h2>
    );
}