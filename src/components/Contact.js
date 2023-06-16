import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

function Contact() {
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 20000);
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = targetDate.getTime() - now;
      const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
      const days = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24 * 365)) /
          (1000 * 60 * 60 * 24)
      );
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setCountdown({ years, days, hours, minutes, seconds });

      if (timeDifference < 0) {
        clearInterval(interval);
        setCountdown({ years: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  function handleClickk(){

        navigate("/subed");
  };
  return (
    <section className="contact" id="contact">
      <h1>Be Ready</h1>
      <h2>
        Your wardrobe's about to get an upgrade it can't resist. Stay in the
        loop with the latest styles and be the first to rock Cubra by
        subscribing to our newsletter.
      </h2>
      <div className="countdown">
        <div>
        <h1>Years</h1>
        <h1>{countdown.years}</h1>
        
        
        </div>
        <div>
        <h1>Days</h1> 
        <h1>{countdown.days}</h1>
        
        
        </div>
        <div>
        <h1>Hours</h1> 
        <h1>{ countdown.hours}</h1>
            
            
            </div>
        <div>
        <h1>Minutes</h1> 
        <h1>{countdown.minutes}</h1>
        
        
        </div>
        <div>
        <h1>Seconds</h1> 
        <h1>{countdown.seconds}</h1>
        
        
        </div>
      </div>
      <button className="sub" onClick={handleClickk}>Subscribe Now</button>
    </section>
  );
}

export default Contact;
