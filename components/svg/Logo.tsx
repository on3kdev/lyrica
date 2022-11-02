import React from "react";
import Svg, { Path } from "react-native-svg";

interface Props {
  color: string;
}

const LogoIcon = ({ color }: Props) => (
  <Svg width={120} height={120} viewBox="0 0 450 450" fill={color}>
    <Path d="M184.2 393.8a67.9 67.9 0 0 1-49.9-20.4 67.9 67.9 0 0 1-20.4-50c0-19.6 6.8-36.3 20.4-49.9a67.9 67.9 0 0 1 50-20.4c8.7 0 16.6 1.3 23.6 3.8a61 61 0 0 1 18.5 10.3v-211h109.7v63.3h-81.6v204c0 19.6-6.8 36.3-20.4 49.9a67.9 67.9 0 0 1-49.9 20.4Z" />
  </Svg>
);

export default LogoIcon;
