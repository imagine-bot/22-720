import { useState } from 'react';
import axios from 'axios';

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const incrementCount = async () => {
    setCount(count + 1);
    try {
      const response = await axios.post('/api/incrementCount', { count: count + 1 });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button 
        className="p-4 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
        onClick={incrementCount}
      >
        Clicked {count} times
      </button>
    </div>
  );
};

export default CounterButton;