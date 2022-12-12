/** @jsx jsx */
import { jsx, Box, Text, Container, Link as A } from 'theme-ui';
import { rgba } from 'polished';
import Logo from 'components/icons/logo';
import { Link } from 'components/link';
import CallToAction from 'sections/call-to-action';
import Widget from './widget';
import { menuItems } from './footer.data';
import { Fragment } from 'react';
import herobg from 'assets/images/herobg.png';
import theme from 'theme/index';
//import Link from 'components/link';
//import { TwitterSvg, FacebookSvg } from 'assets/images/icons';
import { IoLogoTwitter, IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';
import WorkinLogo from 'assets/images/Logo-Workin1.svg';

const taikaiLinks = {
  twitter: "https://twitter.com/taikainetwork",
  facebook: "https://facebook.com/Taikai-618699608613771",
  instagram: "https://instagram.com/taikainetwork",
  linkedin: "https://linkedin.com/company/taikainetwork",
};
const dehouseLinks = {
  twitter: "https://twitter.com/...",
  facebook: "https://facebook.com/...",
  instagram: "https://instagram.com/...",
  linkedin: "https://linkedin.com/company/...",
};

export default function Footer() {
  return (
    <Fragment>
      <CallToAction />
      <Box as="footer" sx={styles.footer}>
        <Container>
          <Box sx={styles.footerTopInner}>
            <Box sx={styles.about}>
              <Box sx={styles.logo}>
                <Logo/>
              </Box>
              <Text as="p" sx={styles.copyright}>
                by TAIKAI — Builder Hub
              </Text>
              <Text as="p" sx={styles.copyright}>
                Copyright © {new Date().getFullYear()} All rights reserved.
              </Text>
              <Text as="p" sx={styles.copyright}>
                R. de António Cardoso 318<br/>
                4150-082 Porto, Portugal
              </Text>
              <Box sx={styles.icons}>
              {showSocialMediaIcons(dehouseLinks)}
              </Box>
            </Box>
            {menuItems.map(({ id, title, items }) => (
              <Widget key={id} title={title} items={items} />
            ))}
            <Box sx={styles.about}>
              <Box sx={styles.logo}>
                <Text as="p" sx={styles.about}>
                  Associates
                </Text>
              </Box>
              <Text as="p" sx={styles.copyright}>
                <A sx={styles.alink} href="https://www.workin.pro/" target="_blank">
                  Work-in
                </A>
              </Text>
              <Text as="p" sx={styles.copyright}>
                <A sx={styles.alink} href="https://taikai.network/" target="_blank">
                  TAIKAI — Builder Hub
                </A>
              </Text>
              </Box>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
}

const iconSize = 24;
const iconColor = theme.colors.taikaiPrimary; //'white';

const showSocialMediaIcons = (links) => {
  return (
  <Box>
  <a aria-label="twitter" href={links.twitter} target="_blank" rel="noopener noreferrer">
  <IoLogoTwitter color={iconColor} size={iconSize} />
  </a>
  
  <a aria-label="facebook" href={links.facebook} target="_blank" rel="noopener noreferrer">
  <IoLogoFacebook color={iconColor} size={iconSize} />
  </a>
  
  <a aria-label="instagram" href={links.instagram} target="_blank" rel="noopener noreferrer">
  <IoLogoInstagram color={iconColor} size={iconSize} />
  </a>

  <a aria-label="linkedin" href={links.linkedin} target="_blank" rel="noopener noreferrer">
    <IoLogoLinkedin color={iconColor} size={iconSize} />
  </a>
  </Box>
  );
};

const styles = {
  alink: {
    textDecoration: 'none',
  },
  footer: {
    // backgroundColor: '#F9FAFC',
    //backgroundColor: '#4329a6EE',
    backgroundColor: theme.colors.taikaiGray,
    //backgroundImage: `url(${herobg})`,
    //color: 'white',
    pt: [8, null, null, 10],
    pb: [8, null, null, 15],
    // alignItems: 'center',
    // display: 'flex',
    justifyContent: 'center',
  },
  footerTopInner: {
    gap: [30, null, 50, '20px 50px', 17, 50],
    display: ['grid'],
    alignItems: 'top',
    gridTemplateColumns: [
      //'repeat(2, 1fr)',
      //null,
      //null,
      'repeat(4, 1fr)',
      //'repeat(5, 1fr)',
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
  },
  icons: {
    display: 'flex', //['block', null, 'flex'],
    //justifyContent: 'center',
    padding: '10px',
    'a': {
      margin: '5px',
    },
  },
  about: {
    display: [null, null, null, 'grid', 'block'],
    gridTemplateColumns: '205px 1fr 1fr',
    alignItems: ['center'],
    gridRow: ['3/4', null, '1/1', '3/4', 'unset'],
    gridColumn: ['1/3', null, '1/2', '1/5', 'unset'],
  },
  logo: {
    display: ['flex'],
    justifyContent: ['center', null, null, 'unset'],
    gridColumn: '1/2',
  },
  terms: {
    display: ['flex'],
    gridColumn: '3/4',
    alignItems: ['center', null, null, null, 'flex-start', 'center'],
    flexDirection: ['row', null, null, null, 'column', 'row'],
    justifyContent: [
      'center',
      null,
      'flex-start',
      'center',
      null,
      'flex-start',
    ],
    mt: [4, null, null, 0, 4],
    a: {
      color: 'heading',
    },
    span: {
      display: ['inline-flex', null, null, null, 'none', 'inline-flex'],
      m: ['0 10px'],
    },
  },
  copyright: {
    color: rgba('#0F2137', 0.9),
    fontSize: 1, //['14px'],
    mt: [3, null, null, -31, 3],
    mr: [null, null, null, 'auto', 'unset'],
    gridColumn: '2/3',
    textAlign: ['center', null, 'left', 'center', 'left'],
  },
};
