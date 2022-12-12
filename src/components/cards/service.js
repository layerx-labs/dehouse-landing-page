/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui';
import { rgba } from 'polished';
import Image from 'components/image';
import theme from 'theme/index.js';

const Service = ({ service }) => {
  return (
    <Box sx={styles.service}>
      <Box sx={styles.img}>
        {service.image}
      </Box>
      <Text as="p">{service.title}</Text>
      <Text as="span">{service.stitle}</Text>
    </Box>
  );
};

const ExtraService = ({ service }) => {
  return (
    <Box sx={styles.service}>
      <Text as='p'>
      {service.title}
      </Text>
      <ul>
      {service.details.map((p, i) => (
        <li key={i}>
          <Text as='span'>
          {p}
          </Text>
        </li>
      ))}
      </ul>
    </Box>
  );
};

export default Service;
export { ExtraService };

const styles = {
  service: {
    //backgroundColor: theme.colors.taikaiPrimary, //'#4329a6',
    backgroundColor: rgba(theme.colors.taikaiPrimary, 0.9),
    border: (theme) => `2px solid ${theme.colors.borderColor}`,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: [107, null, null, 130],
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out 0s',
    ':hover': {
      boxShadow: '0px 20px 40px rgba(67, 41, 166, 0.75)',
      borderColor: 'transparent',
      transitionDuration: '0.2s',
      transform: 'scale(1.05)',
    },
    img: {
      backgroundColor: 'black',
      display: 'top-center',
      mt: '5',
      //justifyContent: 'center',
      //textAlign: 'center',
    },
    p: {
      fontWeight: 700,
      fontSize: [1, null, null, '22px'],
      lineHeight: 2, //1.77,
      //color: 'heading',
      color: 'white',
    },
    span: {
      //color: 'primary',
      color: 'snow',
      fontWeight: 500,
      fontSize: [1, null, null, '18px'],
      lineHeight: 2,
    },
  },
};
