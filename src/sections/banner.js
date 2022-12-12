/** @jsx jsx */
import {
  jsx,
  Box,
  Flex,
  Text,
  Input,
  Label,
  Button,
  Select,
  Heading,
  Container,
} from 'theme-ui';
import { useState } from 'react';
import { rgba } from 'polished';
import Image from 'components/image';
import LogoSvg from 'components/icons/logo';
import theme from 'theme';
import competitionBlack from 'assets/images/competition-black.png';
import collaborationblack from 'assets/images/collaboration-black.png';
import dehause24 from 'assets/images/dehouse24.jpg';
import dehouse_2 from 'assets/images/dehouse_2.jpg';
import herobg from 'assets/images/herobg.png';
import pattern3 from 'assets/images/pattern-3.png';
import blackbrandmark from 'assets/images/blackbrandmark.png';
import growthblack from 'assets/images/growth-black.png';
import workinlogo1 from 'assets/images/Logo-Workin1.svg';
import workinlogo2 from 'assets/images/Logo-Workin2.svg';
import { WorkinLogo1Svg } from 'assets/images';
import { TaikaiLogoSvg } from 'components/icons/taikai-logo';

/*
<Box sx={{
  //...styles.dehouseLogo,
  backgroundImage: `linear-gradient(0deg, #4329a6AA 0%, #0A0A0ACC 100%), url(${dehouse_2})`,
  //background: 'red',
  //margin: 20,
  height: 200,
  width: 'auto', //500,
  //backgroundPosition: 'top right',
  backgroundPosition: 'center',
  backgroundSize: 'cover, contain',
  backgroundRepeat: 'no-repeat, no-repeat',
  //display: 'flex',
  //justifyContent: 'center',
  //maxWidth: '100%',
  //maxHeight: '100%',
  display: 'block', // remove extra space below image
}}>
  <div style={{justifyContent: 'center', display: 'center',}}><img fill src={dehouse_2} /></div>
  <div><LogoSvg fontSize='132px' color1='white' /></div>
</Box>
*/
const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.sectionImg}>
        <Box sx={styles.grid}>
          
          <Box as="figure" sx={styles.landingImage}>
            <Box sx={styles.sectionImg2}>
              <Box sx={styles.dehouseLogo}>
                <LogoSvg fontSize='132px' color1='white' />
              </Box>
            </Box>
            
            <Box sx={styles.center}>
            <table>
              <tr>
              <td></td>
              <td>
                <Box sx={styles.center}>
                  <Text sx={{...styles.landingText, pl: 5, pr: 5}}>
                  by
                  </Text>
              </Box></td>
            </tr>
            <tr>
            <td>
              <a href='https://www.workin.pro/' target='_blank'>
                <WorkinLogo1Svg sx={styles.grow} color='white' stroke='blue' width='200' height='200' />
              </a>
            </td>
            <td><Text sx={{...styles.landingText, pl: 5, pr: 5}}>
              and
            </Text></td>
            <td>
              <Box sx={styles.grow}>
              <a href='https://taikai.network/' target='_blank'>
                <TaikaiLogoSvg color='white' width='200' height='200' />
              </a>
            </Box>
            </td>
            </tr>
            </table>
            </Box>
          </Box>

          <Box as="figure" sx={styles.landingTextBox}>
            <Text sx={styles.landingText} loading="lazy">
              {//Web3 hub in Porto, Portugal
              }
            </Text>
          </Box>
        </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  center: {
    //width: 100,
    display: 'flex',
    //alignItems: 'center',
    //alignText: 'center',
    justifyContent: 'center',
  },
  landingText: {
    //background: 'red',
    fontSize: 10,
    color: "white",
    //width: 500,
    //height: 300,
    display: 'flex',
    alignItems: 'center',
    //alignText: 'center',
    justifyContent: 'center',
  },
  dehouseLogo: {
    mb: 20,
    //fontSize: 16,
    //color: "white",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'whitesmoke',
    //width: 700,
    //height: 200,
  },
  landingTextBox: {
    display: 'flex',
    //alignItems: 'center',
    //alignText: 'center',
    justifyContent: 'center',
  },
  landingImage: {
    //backgroundColor: "lightgreen",
    //width: 500,
    //height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'grid',
  },
  sectionImg: {
    m: 20,
    //width: '1500px',
    //height: '400px',
    //background: `linear-gradient(0deg, #FFFFFFFF 10%, ${theme.colors.taikaiPrimary} 100%), url(${dehouse_2}) no-repeat`,
    //background: `linear-gradient(0deg, #4329a6FF 0%, #4329a6AA 2%, #4329a655 4%, #4329a655 100%), url(${dehouse_2}) no-repeat`,
    //background: `linear-gradient(0deg, #4329a6FF 0%, #4329a6AA 2%, #4329a655 4%, #4329a655 100%), url(${dehouse_2}) no-repeat`,
    // background: `linear-gradient(0deg, #4329a655 0%, #4329a655 100%), url(${dehouse_2}) no-repeat`,
    backgroundSize: 'cover',
    //backgroundSize: '50%', //'contain',
    //width: '1500',
    //height: '1200',
    display: 'center', //important to be center
    justifyContent: 'center',
    //alignItems: 'center',
    //backgroundImage: `url(${dehause24})`,
    //pt: 10, //[17, null, null, 20, null],
    pb: 10, //[6, null, null, 12, 16],
  },
  sectionImg2: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //mt: 10, //[10, 10, 10, 10],
    //backgroundImage: `url(${dehause24})`,
    pt: 10, //[17, null, null, 20, null],
    pb: 10, //[6, null, null, 12, 16],
  },
  grow: {
    ':hover': {
      //boxShadow: '0px 20px 40px rgba(67, 41, 166, 0.75)',
      //borderColor: 'transparent',
      transitionDuration: '0.5s',
      transform: 'scale(1.1)',
    },
  },
  section: {
    //backgroundImage: `url(${herobg})`,
    //backgroundImage: `url(${dehouseCover})`,
    //background: 'linear-gradient(0deg, #4329a6 0%, #2F2C46 100%)',
    //backgroundImage: `linear-gradient(0deg, #4329a677 0%, #0A0A0A77 100%), url(${herobg})`,
    backgroundImage: `linear-gradient(0deg, #4329a6AA 0%, #0A0A0ACC 100%), url(${pattern3})`,
    //backgroundSize: 'cover, contain',
    backgroundSize: 'cover',
    //backgroundPosition: 'center, right bottom',
    //backgroundPosition: 'center',
    //backgroundPosition: 'top left',
    backgroundRepeat: 'no-repeat, no-repeat',
    pt: 10, //[17, null, null, 20, null],
    pb: 10, //[6, null, null, 12, 16],
    //width: '100%',
    //height: '100%',
    //position: 'absolute',
    //top: 0,
    //left: 0,
  },
  grid: {
    //background: 'black',
    gap: '10px', //['30px 60px', null, '30px 40px', '30px 60px'],
    display: 'grid',
    //minHeight: [null, null, null, '66vh', '81vh'],
    //alignItems: 'top',
    //gridTemplateRows: 'repeat(2, 1fr)',
    gridTemplateColumns: '1fr',
    //gridTemplateColumns: 'repeat(2, 1fr)',
  },
  domainCard: {
    background: 'white',
    boxShadow: '0px 24px 50px rgba(54, 91, 125, 0.25)',
    borderRadius: 10,
    p: ['30px 25px 50px', null, null, '40px 40px 60px'],
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 480, 'none'],
    h2: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 9, 14],
      lineHeight: 1.36,
      letterSpacing: 'heading',
      color: 'textSecondary',
      mb: [5, null, null, 7, 8],
    },
  },
  inputGroup: {
    alignItems: 'center',
    border: (theme) => `1px solid ${theme.colors.borderColor}`,
    borderRadius: 5,
    px: [3, null, null, 6],
    input: {
      border: 0,
      borderRadius: 0,
      fontSize: [1, null, null, 2],
      minHeight: [45, null, null, 60],
      p: 0,
      ':focus': {
        boxShadow: 'none',
      },
      '::placeholder': {
        fontSize: '15px',
        lineHeight: 1.33,
        color: rgba('#02073E', 0.4),
      },
      ':-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 30px white inset !important',
      },
    },
    select: {
      border: 0,
      color: 'textSecondary',
      fontWeight: 500,
      fontSize: [0, null, null, '15px'],
      lineHeight: 1.33,
      letterSpacing: 'heading',
      minHeight: [45, null, null, 60],
      minWidth: [60, null, null, 75],
      p: 0,
      textTransform: 'uppercase',
      ':focus': {
        outline: 0,
      },
      '+ svg': {
        color: '#A6A8BB',
        height: 40,
        width: 40,
      },
    },
  },
  submit: {
    fontSize: [1, null, null, 2],
    mt: [4],
    minHeight: [45, null, null, 60],
    width: '100%',
  },
  note: {
    fontStyle: 'italic',
    fontSize: [0, null, null, '15px'],
    lineHeight: 1.33,
    textAlign: 'center',
    color: rgba('#02073E', 0.5),
    mt: [4],
  },
};
