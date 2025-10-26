import { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    // IST = UTC + 5:30
    const eventDate = new Date("2025-11-16T03:30:00Z"); // 9:00 AM IST in UTC
    const difference = eventDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <div className="countdown">Event Started!</div>;

  return (
    <div className="countdown">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="countdown-item">
          <span>{value.toString().padStart(2, "0")}</span>
          <div className="countdown-label">{unit.toUpperCase()}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;