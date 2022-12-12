/** @jsx jsx */
import { jsx, Box, Container, Text, Button } from 'theme-ui';
import Slider from 'react-slick';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import SlickArrow from 'components/slick-arrow';
import theme from 'theme';

const data = [
  {
    id: 1,
    title: 'Pack DOGE',
    subtitle: 'For startup team with a dream',
    price: '€ 40',
    buttonText: '€ 10 Daily Pass',
    isRecommended: false,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '20% OFF*',
      },
      {
        id: 2,
        isAvailable: true,
        title: '5 days (€ 8.0 / day)',
      },
      {
        id: 3,
        isAvailable: true,
        title: 'Flex desk',
      },
    ],
  },
  {
    id: 2,
    title: 'Pack VITALIK',
    subtitle: 'For visionaries',
    price: '€ 100',
    buttonText: '€ 10 Daily Pass',
    isRecommended: true,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '33% OFF*',
      },
      {
        id: 2,
        isAvailable: true,
        title: '15 days (€ 6.5 / day)',
      },
      {
        id: 3,
        isAvailable: true,
        title: 'Flex desk',
      },
    ],
  },
  {
    id: 3,
    title: 'Pack SATOSHI',
    subtitle: 'For the ultimate company',
    price: '€ 160',
    buttonText: '€ 10 Daily Pass',
    isRecommended: false,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: '47% OFF*',
      },
      {
        id: 2,
        isAvailable: true,
        title: '1 month (€ 5.5 / day)',
      },
      {
        id: 3,
        isAvailable: true,
        title: 'Fix Desk',
      },
    ],
  },
];

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Pricing = () => {
  return (
    <Box as="section" id="pricing" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Web3 Friendly"
          title="Choose your plan below"
        />
        <Box sx={styles.notes}>
          <Button sx={styles.textNotes} variant='text'>
            € 10 daily pass
          </Button>
        </Box>
        <Slider sx={styles.grid} {...settings}>
          {data?.map((price, index) => (
            <PriceTable price={price} key={index} />
          ))}
        </Slider>
        <Box sx={styles.notes}>
          <Text>
            *Discount on the daily pass
          </Text>
          <Text>
            ** Limited capacity of 40 seats
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;

const styles = {
  section: {
    pt: [6],
    pb: [12, null, null, 15, 17],
  },
  container: {
    pl: 0,
    pr: 0,
  },
  heading: {
    mb: [7, null, null, null, 10, null, 10],
    px: [6, null, null, 0],
    h3: {
      fontSize: [4, null, null, 8],
    },
    //opacity: 0.7,
    //backgroundColor: 'rgba(255, 106, 44, 0.95)',
    //borderRadius: 20,
  },
  textNotes: {
    fontSize: 10,
    fontWeight: '700',
    borderRadius: 20,
    backgroundColor: theme.colors.taikaiOrange, //'#ff6a2c',
    //width: '300',
    //mb: 10,
    //mt: 5,
    fontSize: 4,
    alignItems: 'center',
    display: 'grid',
    justifyContent: 'center',
    gridTemplateRows: [null, null, null, null, 'repeat(1, 1fr)'],
  },
  notes: {
    mt: 5,
    fontSize: 4,
    display: 'grid',
    justifyContent: 'center',
    gridTemplateRows: [null, null, null, null, 'repeat(2, 1fr)'],
  },
  grid: {
    gap: [null, null, null, null, 6],
    display: [null, null, null, null, 'grid'],
    gridTemplateColumns: [null, null, null, null, 'repeat(3, 1fr)'],
    alignItems: [null, null, null, null, 'flex-end'],
    '.slick-slide > div': {
      p: ['35px', '40px', null, '35px 23px 23px', 0],
    },
    '.slick-arrow': {
      bottom: -5,
    },
  },
};
