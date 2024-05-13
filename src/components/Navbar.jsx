import React, { useEffect, useState } from 'react';
import './Navbar.css';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

export const Appy = () => {
  const [showItems, setShowItems] = useState(false);

  useEffect(() => {
    setShowItems(true);
  }, []);

  return (
    <div className="container">
      <ul className="item-list">
        {items.map((item, index) => (
          <ListItem key={index} index={index} show={showItems} />
          
        ))}
      </ul>
    </div>
  );
};

const ListItem = ({ index, show }) => {
  const delay = index * 100; // Adjust delay timing as needed
  const style = {
    animation: `${show ? 'slide-in 0.5s forwards' : 'none'} ${delay}ms`,
  };

  return <li style={style}>{index}</li>;
};

