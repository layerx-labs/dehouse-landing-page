/** @jsx jsx */
import { jsx, Box, Button, Heading, Text } from 'theme-ui';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { IoIosCloseCircle } from 'react-icons/io';
import { rgba } from 'polished';
import orangepattern from 'assets/images/orangepattern.png';
import pattern1 from 'assets/images/pattern-1.png';
import pattern3 from 'assets/images/pattern-3.png';
import herobg from 'assets/images/herobg.png';
import theme from 'theme';

const PriceTable = ({ price }) => {
  return (
    <Box
      sx={styles.priceTable}
      className={`${price.isRecommended ? 'recommended' : ''}`}
    >
      <Box sx={styles.header} className="priceHeader">
        <Heading as="h1" sx={styles.title}>
          {price.title}
        </Heading>
        <Button sx={styles.priceAmount} variant="text">
          {price?.price}
        </Button>
      </Box>
      <Box as="ul" sx={styles.list}>
        {price?.features?.map((feat) => (
          <li key={feat.id} className={!feat.isAvailable ? 'unavailable' : ''}>
            {feat.isAvailable ? (
              <span>
                <IoMdCheckmarkCircle sx={{ color: '#ff6a2c' }} />
              </span>
            ) : (
              <span>
                <IoIosCloseCircle color="#5B2B9D" />
              </span>
            )}
            <span>{feat.title}</span>
          </li>
        ))}
      </Box>
    </Box>
  );
};

export default PriceTable;

const styles = {
  priceTable: {
    //backgroundImage: `url(${pattern1})`,
    //backgroundImage: `url(${herobg})`,
    backgroundColor: rgba(theme.colors.taikaiPrimary, 0.9),
    //backgroundColor: '#4329a6EE',
    borderRadius: 20,
    border: (theme) => `2px solid ${theme.colors.borderColor}`,
    textAlign: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: [
      '20px 15px',
      null,
      null,
      '30px 25px',
      '25px 30px 40px 30px',
      '45px 60px 70px 45px',
    ],
    boxShadow: ['0px 15px 50px rgba(91, 132, 193, 0.1)', null, null, 'none'],
    '&.recommended': {
      boxShadow: [null, null, null, '0px 20px 50px rgba(91, 132, 193, 0.8)'],
      button: {
        //backgroundColor: 'ff6a2c',
        //color: 'primary',
      },
    },
    ':hover': {
      boxShadow: ['0px 20px 40px rgba(67, 41, 166, 0.75)'],
      //boxShadow: '#4329a6',
      borderColor: 'transparent',
      opacity: '0.95',
      transitionDuration: '.5s',
      transform: 'scale(1.05)',
      //transition: '.5s',
    },
  },
  recomLabel: {
    fontWeight: 700,
    fontSize: [2, 3],//[0, 1],
    lineHeight: 1.29,
    backgroundColor: '#52ACFF',
    borderRadius: '8px 8px 0px 0px',
    position: 'absolute',
    left: 0,
    top: '-35px',
    right: 0,
    minHeight: [20, 25],
    textTransform: 'uppercase',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: [3, 4, 5],
    lineHeight: 1.31,
    letterSpacing: '-0.55px',
    color:'#FFF',
  },
  subtitle: {
    color: '#FFF',
    fontSize: [0, null, 1, 2],
    lineHeight: 1.62,
    mt: '8px',
  },
  priceAmount: {
    color: '#FFF',
    backgroundColor: theme.colors.taikaiOrange, //'#ff6a2c',
    fontWeight: 700,
    fontSize: [1, 2, null, 4, '26px'],
    lineHeight: 1.5,
    letterSpacing: 'heading',
    mt: ['12px', null, null, '26px'],

    border: `2px solid ${rgba('#5B2B9D', 0.2)}`,
    //color: 'primary',
    //minHeight: [40, null, null, null, 50],
    //padding: ['0 24px', null, '0 32px'],
    //fontSize: [1, null, null, null, 2],
    mt: [5, null, null, 10],
    ':hover': {
      borderColor: 'primary',
    },
  },
  list: {
    listStyle: 'none',
    padding: 0,
    mt: [6, null, null, null, 10],
    maxWidth: 340,
    li: {
      display: 'flex',
      color:'#fff',
      alignItems: 'flex-start',
      fontSize: [0, null, 1, null, 4],
      lineHeight: 1.62,
      '+ li ': {
        mt: [3, null, null, null, 6],
      },
      svg: {
        height: [18, null, null, null, 28],
        width: [18, null, null, null, 28],
      },
      'span:first-of-type': {
        mr: '10px',
        mt: '5px',
      },
    },
    '.unavailable': {
      opacity: 0.5,
    },
  },
  listItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    border: `2px solid ${rgba('#5B2B9D', 0.2)}`,
    color: 'primary',
    minHeight: [40, null, null, null, 50],
    padding: ['0 24px', null, '0 32px'],
    fontSize: [1, null, null, null, 2],
    mt: [3, null, null, 6],
    ':hover': {
      borderColor: 'primary',
    },
  },
};
