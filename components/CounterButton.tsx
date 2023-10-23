import { useState } from 'react';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center h-screen">
      <button 
        className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
        onClick={() => setCount(count + 1)}
      >
        Clicked {count} times
      </button>
    </div>
  );
};

export default CounterButton;