/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Button } from 'theme-ui';

const CallToAction = () => {
  return (
    <Box as='section' id='contactus' sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.contentBox}>
          <Box sx={styles.heading}>
          Join DeHouse today
          </Box>
          <Box sx={styles.btnWrapper}>
            <Button variant="text">Contact us</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default CallToAction;

const styles = {
  section: {
    position: 'relative',
    zIndex: 1,
    ':before': {
      //backgroundColor: '#F9FAFC',
      bottom: 0,
      content: `''`,
      height: '50%',
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: '-1',
    },
  },
  container: {
    px: [0, '0 !important', '30px !important'],
  },
  contentBox: {
    /*padding: [
      '35px 60px 60px',
      null,
      null,
      '40px 30px 45px',
      '55px 30px 60px',
      '55px 50px 60px',
    ],*/
    //backgroundColor: '#183656',
    //backgroundImage: ['none', null, null, `url(${BgShape})`],
    //backgroundRepeat: 'no-repeat',
    //backgroundPosition: '60% center',
    //backgroundSize: ['120px', null, null, null, 'auto'],
    //borderRadius: '7px',
    display: 'flex',
    alignItems: 'center',
    textAlign: ['center', null, null, 'left'],
    //flexDirection: ['column', null, null, 'row'],
    flexDirection: 'column',
    //mt: 5,
    //justifyContent: ['center', null, null, 'space-between'],
  },
  heading: {
    fontSize: 12, //[3, 7, 8, 7, 11],
    fontWeight: 700,
    //fontFamily: 'Bree Serif, serif',
    color: 'primary',
    backgroundColor: 'white',
    letterSpacing: 'heading',
    lineHeight: [1.4, 1.53],
    maxWidth: ['100%', '80%', null, 340, '50%', '45%'],
    //mb: [11, null, null, 0],
    m: 10,
  },
  btnWrapper: {
    //m: 5,
    mb: 20,
    boxShadow: '0px 24px 50px rgba(54, 91, 125, 0.25)',
    display: 'flex',
    position: 'relative',
    ':before, :after': {
      content: `''`,
      position: 'absolute',
      width: '73px',
      height: '26px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundSize: ['55%', null, null, '100%'],
    },
    ':before': {
      //backgroundImage: `url(${shapeTop})`,
      //top: '-28px',
    },
    ':after': {
      //backgroundImage: `url(${shapeBottom})`,
      //bottom: '-28px',
    },
    button: {
      color: 'white',
      backgroundColor: 'primary',
      boxShadow: '0px 5px 10px rgba(67, 41, 166, 0.8)',
      ':hover': {
        boxShadow: '0px 10px 40px rgba(67, 41, 166, 0.8)',
        transitionDuration: '0.1s',
        transform: 'scale(1.05)',
      },
      borderRadius: 5,
      padding: 0,
      fontSize: [0, null, null, null, 2],
      minHeight: [40, null, null, 45, 60],
      padding: ['0 28px', null, null, null, '0 40px'],
      textTransform: 'uppercase',
    },
  },
};
