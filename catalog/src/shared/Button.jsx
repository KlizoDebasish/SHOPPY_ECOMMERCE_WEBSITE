function Button({ text, className, onClick }) {
  return (
    <button
      onClick={onClick} // Add onClick handler here
      className={`px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-blue-500 transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 mr-2 ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
