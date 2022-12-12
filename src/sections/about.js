/** @jsx jsx */
import { jsx, Box, Container, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import theme from 'theme';
import LogoSvg from 'components/icons/logo';
//import dehouse_2 from 'assets/images/dehouse_2.jpg';
//import herobg from 'assets/images/herobg.png';
import pattern3 from 'assets/images/pattern-3.png';

const lines = [
  'An informal and dynamic space, exclusively dedicated to the ecosystem of Web3 organizations.',
  'The goal is to create a great vibe and flexible environment, with a decentralized workspace to enhance a positive work culture.',
  'A space with a strong sense of community, where everything can be co-developed, co-created, and co-shared.',
  'The place where we can meet people with the same interests, generate and discuss new ideas, creating synergies.',
  'Gather the right tools to ensure greater productivity in our work, an efficient network, and the perfect work/life balance.',
];
/*
<SectionHeading
          sx={styles.heading}
          slogan="DeHouse"
          sloganColor='white'
          title="Web3 hub in Portugal"
          titleColor='white'
        />
        */
const About = () => {
  return (
    <Box as="section" id="about" sx={styles.section}>
      <Container sx={styles.container}>
        <LogoSvg color1='white' fontSize='12' justifyContent='center'/>
        <Box>
          <Text sx={styles.textNotes}>Web3 hub in Portugal</Text>
        </Box>
        <Box>
          <Text sx={styles.textNotes}>A joint venture between Work-In and TAIKAI</Text>
        </Box>
        <Box sx={styles.notes}>
          {lines.map((line, i) => (
            <Text key={i} sx={styles.textNotes2} loading="lazy">
              {line}
            </Text>
          ))}
          </Box>
      </Container>
    </Box>
  );
};

export default About;

const styles = {
  section: {
    pt: 10, //[6],
    pb: 10, //[12, null, null, 15, 17],
    //ml: 0,
    //backgroundImage: `linear-gradient(0deg, #FAFAFAAA 0%, #4329a655 100%), url(${dehouse_2})`,
    background: `linear-gradient(0deg, #FFFFFFFF 2%, #FAFAFAAA 20%, #4329a6AA 100%), url(${pattern3})`,
    //background: `linear-gradient(0deg, #FFFFFFFF 2%, #FAFAFAAA 20%, #4329a6AA 100%), #4329a6`,
    //content: 'fill',
    //justifyContent: 'stretch',
    //backgroundSize: 'cover, contain',
    backgroundSize: 'cover',
    //backgroundPosition: 'center',
    //backgroundPosition: 'center, right bottom',
    //backgroundPosition: 'center, top right',
    backgroundRepeat: 'no-repeat, no-repeat',
    //width: '100%',
    //height: '100%',
    //position: 'relative', //'absolute',
  },
  container: {
    pl: 0,
    pr: 0,
    width: 700,
    height: 900,
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
    m: 5,
    fontSize: 8,
    fontWeight: '700',
    color: 'white', //theme.colors.taikaiOrange,
    justifyContent: 'center',
    display: 'flex',
  },
  textNotes2: {
    m: 2,
    fontWeight: '700',
    borderRadius: 20,
    //backgroundColor: theme.colors.taikaiOrange,
    //color: theme.colors.taikaiGray,
    //width: '300',
    //mb: 10,
    //mt: 5,
    fontSize: 2,
    //alignItems: 'left',
    //justifyContent: 'center',
    display: 'grid',
    gridTemplateRows: [null, null, null, null, 'repeat(1, 1fr)'],
  },
  notes: {
    border: `1px solid ${theme.colors.borderColor}`,
    borderRadius: 10,
    display: 'flex',
    //flexDirection: 'column',
    justifyContent: 'center',
    //minHeight: [107, null, null, 130],
    //textAlign: 'center',
    transition: 'all 0.3s ease-in-out 0s',
    ':hover': {
      boxShadow: '0px 20px 40px rgba(67, 41, 166, 0.75)',
      borderColor: 'transparent',
      transitionDuration: '0.5s',
      transform: 'scale(1.1)',
    },
    //background: `rgba(${theme.colors.taikaiPrimary}, 0.75)`,
    
    mt: 20,
    fontSize: 4,
    display: 'grid',
    justifyContent: 'center',
    gridTemplateRows: 'repeat(2, 1fr)',
  },
};
