import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const Circular_Progress_Bar = ({ progress, radius, strokeWidth }) => {
  const circumference = 2 * Math.PI * radius;
  const progressStrokeDashoffset = ((100 - progress) / 100) * circumference + 15; //MUSS NOCH ANGEPASST WERDEN 

  return (
    <View>
      <Svg width={radius * 2} height={radius * 2}>
        <G rotation="-90" origin={`${radius}, ${radius}`}>
          <Circle
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2}
            stroke="#50545B"
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={radius}
            cy={radius}
            r={radius - strokeWidth / 2}
            stroke="#ED464A"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={progressStrokeDashoffset}
            strokeLinecap="round"
          />
        </G>
      </Svg>
    </View>
  );
};

export default Circular_Progress_Bar;
