/** @jsx jsx */
import { jsx, Box, Flex, Container, Button, Text } from 'theme-ui';
import { Fragment, useState } from 'react';
import Sticky from 'react-stickynode';
import Logo from 'components/logo';
import HamburgerMenu from 'components/hamburger';
import Navbar from './navbar';
import theme from 'theme/index';

export default function Header() {
  const [state, setState] = useState({
    isMobileMenu: false,
    isSticky: false,
  });
  const handleStateChange = (status) => {
    status.status === Sticky.STATUS_FIXED
      ? setState({ ...state, isSticky: true })
      : setState({ ...state, isSticky: false });
  };
  const toggleMobileMenu = () => {
    setState((prev) => {
      return {
        ...prev,
        isMobileMenu: !prev.isMobileMenu,
      };
    });
  };
  const handleCloseMenu = () => {
    setState({
      ...state,
      isMobileMenu: false,
    });
  };

  return (
    <Fragment>
     
      <Sticky
        enabled={true}
        top={0}
        activeClass="is-sticky"
        innerZ={100}
        onStateChange={handleStateChange}
      >
        <Box
          as="header"
          sx={styles.header}
          className={state.isSticky ? 'is-sticky' : ''}
        >
          <Container sx={styles.container}>
            <Logo sx={{
              ...styles.logo,
              //backgroundColor: state.isSticky ? (theme) => `${theme.colors.taikaiPrimary}` : 'white',
              //backgroundColor: state.isSticky ? 'white' : theme.colors.taikaiPrimary,
              //backgroundColor: 'whitesmoke',
              fontSize: 10,
            }}
            color1={state.isSticky ? theme.colors.taikaiPrimary : 'white'}
            />
            <Navbar
              isSticky={state.isSticky}
              isMobile={state.isMobileMenu}
              handleCloseMenu={handleCloseMenu}
            />
            <Flex sx={styles.buttonGroup}>
              <Button
                variant="text"
                sx={{
                  ...styles.login,
                  color: state.isSticky ? 'text' : 'white',
                }}
              >
                Login
              </Button>
              <Button
                variant="text"
                sx={{
                  ...styles.join,
                  backgroundColor: state.isSticky ? 'primary' : 'white',
                  color: state.isSticky ? 'white' : 'primary',
                }}
              >
                Join
              </Button>
            </Flex>

            <HamburgerMenu
              sx={styles.hamburger}
              isSticky={state.isSticky}
              isOpen={state.isMobileMenu}
              toggleMobileMenu={toggleMobileMenu}
            />
          </Container>
        </Box>
      </Sticky>
    </Fragment>
  );
}

const styles = {
  header: {
    //fontFamily: 'SpaceGroteskBold',
    position: 'fixed',
    left: 0,
    right: 0,
    py: 4,
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-sticky': {
      backgroundColor: theme.colors.taikaiGray, //'white',
      boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
      paddingTop: '15px',
      paddingBottom: '15px',
    },
    '&.is-mobile-menu': {
      backgroundColor: theme.colors.taikaiGray, //'white',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    mr: [null, null, null, null, 6, null, 12],
    borderRadius: 5,
  },
  buttonGroup: {
    alignItems: 'center',
    marginLeft: 'auto',
    button: {
      fontWeight: 700,
    },
  },
  login: {
    fontSize: 4,
    display: ['none', null, null, null, 'flex'],
    color: 'white',
    p: 0,
    mr: [null, null, null, null, 5],
    svg: {
      mr: 2,
    },
    ':hover': {
      transitionDuration: '0.2s',
      transform: 'scale(1.05)',
    },
  },
  join: {
    fontSize: 4,
    backgroundColor: 'white',
    minHeight: [30, null, null, 40],
    p: ['0 12px', null, null, '0 14px'],
    ':hover': {
      transitionDuration: '0.2s',
      transform: 'scale(1.05)',
    },
    //fontSize: ['10px', null, null, 1],
  },
  hamburger: {
    display: [null, null, null, null, null, 'none'],
  },
};
