import { useState } from 'react';

type ExpandableTextProps = {
  text: string;
  maxLength?: number;
};

export default function ExpandableText({ text, maxLength = 100 }: ExpandableTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (text.length <= maxLength) {
    return <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{text}</p>;
  }

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </p>
      <button 
        onClick={toggleText} 
        className="mt-2 text-sm font-bold text-blue-600 hover:underline dark:text-blue-400"
      >
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}