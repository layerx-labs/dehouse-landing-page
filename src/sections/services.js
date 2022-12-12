/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Service, { ExtraService } from 'components/cards/service';
//import img1 from '../assets/images/services/1.png';
//import img2 from '../assets/images/services/2.png';
//import img3 from '../assets/images/services/3.png';
//import img4 from '../assets/images/services/4.png';
//import img5 from '../assets/images/services/5.png';
//import img6 from '../assets/images/services/6.png';
//import img7 from '../assets/images/services/7.png';
//import img8 from '../assets/images/services/8.png';
import herobg from 'assets/images/herobg.png';

import {
  SpaceFurnitureSvg, CleaningServiceSvg, ClockSvg, AccessSvg, 
  InternetSvg, PersonalizedServiceSvg, AirConditioningSvg, ExpensesIncludedSvg,
} from '../assets/images/services';
import theme from 'theme';
const taikaiOrange = '#ff6a2c';
const strokeClr = 'black';
const img1 = <SpaceFurnitureSvg color={taikaiOrange} stroke={strokeClr} width={64} height={64} />;
const img2 = <CleaningServiceSvg color={taikaiOrange} stroke={strokeClr} width={64} height={64} />;
const img3 = <ClockSvg color={taikaiOrange} stroke={strokeClr} width={64} height={64} />;
const img4 = <AccessSvg color={taikaiOrange} stroke={strokeClr} width={64} height={64} />;
const img5 = <InternetSvg color={taikaiOrange} stroke={strokeClr} width={64} height={64} />;
const img6 = <PersonalizedServiceSvg color={taikaiOrange} stroke={strokeClr} width={64} height={64} />;
const img7 = <AirConditioningSvg color={taikaiOrange} stroke={strokeClr} width={64} height={64} />;
const img8 = <ExpensesIncludedSvg color={taikaiOrange} stroke={strokeClr} width={64} height={64} />;

const services = [
  {
    image: img1,
    title: 'Space & Furniture',
    stitle:'Adapted to your needs'
  },
  {
    image: img2,
    title: 'Cleaning Service',
    stitle: 'Cleaned to perfection',
  },
  {
    image: img3,
    title: 'Access 7am - 23pm',
    stitle: 'Extension of time available',
  },
  {
    image: img4,
    title: 'Global Access',
    stitle: 'To all common areas',
  },
  {
    image: img5,
    title: 'Internet',
    stitle: 'Reliable and secure',
  },
  {
    image: img6,
    title: 'Personalized Service',
    stitle: 'On-site assistance',
  },
  {
    image: img7,
    title: 'Air Conditioning',
    stitle: 'Comfort at work',
  },
  {
    image: img8,
    title: 'Expenses Included',
    stitle: 'Water and light',
  },
  /*{
    //image: img8,
    title: 'Parking lot',
    stitle: '25€ p/month for Work-In members'+
    '3 minutes walking distance'+
    'Security'+
    'Open 24 hours, every day',
  },*/
];

const extraServices = [
  {
    title: 'Parking lot',
    details: [
      '25€ p/month for Work-In members',
      '3 minutes walking distance',
      'Security',
      'Open 24 hours, every day',
    ],
  },
  {
    title: '10% Discount',
    details: [
      'At Edifício Transparente restaurants',
    ],
  },
];



const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="A Hub Designed For You"
          title="Find what you are looking for"
        />
        <Box sx={styles.grid}>
          {services.map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </Box>
        {/*<Box sx={styles.grid2}>
          {extraServices.map((service, i) => (
            <ExtraService key={i} service={service} />
          ))}
        </Box>*/
        }
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    mt: 10,
    pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 12],
    //backgroundImage: `linear-gradient(0deg, #FFFFFFBB 0%, #FFFFFFCC 100%), url(${herobg})`,
  },
  grid: {
    //gap: [3, null, null, 4],
    gap: 5, //[8, null, null, 8],
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(4, 300px)',
    ],
    gridTemplateRows: [
      'repeat(3, 200px)',
    ],
  },
  grid2: {
    m: 5,
    gap: 5,
    display: 'grid',
    justifyContent: 'center',
    //background: theme.colors.taikaiPrimary,
    gridTemplateColumns: [
      'repeat(2, 600px)',
    ],
    gridTemplateRows: [
      'repeat(1, 200px)',
    ],
    /*p: {
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
    },*/
  },
};
