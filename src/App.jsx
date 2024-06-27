import React, { useState } from 'react';
import './App.css';
import { FaWhatsappSquare } from 'react-icons/fa';

const App = () => {
  const [count, setCount] = useState(null);

  const onIncreaseCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="rp-section">
      <div className="rp-container">
        <div className="rp-wrapper">
          <div className="notification-icon">
            <FaWhatsappSquare />
            {count > 0 && <div className="badge-ctn">{count}</div>}
          </div>
          <button className="badge-count-btn" onClick={onIncreaseCount}>
            Click to increase the count
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
