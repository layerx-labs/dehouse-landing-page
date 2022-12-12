import React from 'react';
import { jsx, Box, Text } from 'theme-ui';
//import dehouseLogo from 'components/icons/dehouse-logo.png';
import Image from 'components/image';
import { rgba } from 'polished';
import theme from 'theme/index';

const Logo = ({ color1=theme.colors.taikaiPrimary, color2=theme.colors.taikaiOrange, fontSize, ...props }) => {
  return (
      //<Image src={dehouseLogo} width={185} height={36} loading="lazy" alt="sever-rack" />
      <Box sx={{...styles.bg, fontSize, ...props}} >
        <Text fontSize={fontSize} color={color1}>De</Text>
        <Text fontSize={fontSize} color={color2}>House</Text>
      </Box>
  );
};

const styles = {
  bg: {
    display: 'flex',
    //fontSize: 12,
    fontWeight: 900,
    pl: 5,
    pr: 5,
    borderRadius: 5,
    //backgroundColor: rgba('#ff6a2c', 0.9),
    //color: 'white',
  },
  //textColor1: {
  //  color: theme.colors.taikaiPrimary,
  //},
  //textColor2: {
  //  color: theme.colors.taikaiOrange,
  //},
};

export default Logo;
