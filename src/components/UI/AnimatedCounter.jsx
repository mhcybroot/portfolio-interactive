import React, { useState, useEffect, useRef } from 'react';

export default function AnimatedCounter({ value, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState("0");
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateValue();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const animateValue = () => {
    // Parse numerical value
    const numericStr = value.replace(/[^0-9.]/g, '');
    const targetNum = parseFloat(numericStr);
    const hasDecimal = numericStr.includes('.');
    const decimalPlaces = hasDecimal ? numericStr.split('.')[1].length : 0;

    if (isNaN(targetNum)) {
      setCount(value);
      return;
    }

    const startTime = performance.now();

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeProgress * targetNum;

      if (hasDecimal) {
        setCount(currentVal.toFixed(decimalPlaces));
      } else {
        setCount(Math.floor(currentVal).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(updateCount);
  };

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}
