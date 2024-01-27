// CountdownTimer.js

import { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const targetDate = new Date('2024-01-30T23:59:59'); // Set your target date here
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  useEffect(() => {
    const timerID = setInterval(updateTime, 1000);
    updateTime();

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const updateTime = () => {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = zeroPadding(Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2);
    const minutes = zeroPadding(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)), 2);
    const seconds = zeroPadding(Math.floor((timeDifference % (1000 * 60)) / 1000), 2);

    setTime(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    setDate(
      zeroPadding(currentDate.getFullYear(), 4) +
        '-' +
        zeroPadding(currentDate.getMonth() + 1, 2) +
        '-' +
        zeroPadding(currentDate.getDate(), 2) +
        ' ' +
        week[currentDate.getDay()]
    );
  };

  const zeroPadding = (num, digit) => {
    let zero = '';
    for (let i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  };

  return (
    <div id="clock">
      <p className="date">{date}</p>
      <p className="time">{time}</p>
    </div>
  );
};

export default Timer;
