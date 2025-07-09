
interface PixelButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const PixelButton: React.FC<PixelButtonProps> = ({ label, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-yellow-300 text-pink-900 font-pixel py-3 px-6 border-2 border-pink-500 rounded-md hover:bg-yellow-400 transition-all animate-float ${className}`}
    >
      {label}
    </button>
  );
};

export default PixelButton;
