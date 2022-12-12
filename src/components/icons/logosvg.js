import React from 'react';
import logo from 'components/icons/logo.png';
import Image from 'components/image';
//import ClockSvg from 'assets/images/services';

const LogoSvg = ({ src, color, width, height, ...props }) => {
  return (
    //<ClockSvg color={color} width={width} height={height} {...props} />
    <Image src={src} fill={color} width={width} height={height} loading="lazy" alt="sever-rack" />
  );
};

export default LogoSvg;
