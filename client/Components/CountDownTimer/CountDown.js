import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const CountDown = ({ startDate, endDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const renderTimerComponents = Object.keys(timeLeft).map((interval) => {
    if (!timeLeft[interval] || interval === "seconds") {
      // Exclude seconds from being rendered
      return null;
    }

    return (
      <Text key={interval} style={{ color: "#475ad2" }}>
        {timeLeft[interval]} {interval}
      </Text>
    );
  });

  return (
    <View style={{}}>
      {renderTimerComponents.length ? (
        <Text style={{ fontSize: 17 }}>{renderTimerComponents}</Text>
      ) : (
        <Text style={{ fontSize: 10, color: "red" }}>Time's Up</Text>
      )}
    </View>
  );
};

export default CountDown;
