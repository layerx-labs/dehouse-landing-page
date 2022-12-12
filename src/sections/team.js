/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box } from 'theme-ui';
import { useMediaQuery } from 'react-responsive';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import team from 'assets/images/team.png';
import herobg from 'assets/images/herobg.png';

export default function Team() {
  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Meet our team!"
          titleColor='white'
          description="A diverse group of talented individuals with impactful approaches to Web3 community development."
          descriptionColor='white'
        />

        <Box as="figure" sx={styles.thumbWrapper}>
          <Image src={team} loading="lazy" alt="Team" />
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [0],
    backgroundImage: `url(${herobg})`,
  },
  heading: {
    fontSize: 10,
    fontWeight: 800,
    mb: [8, null, null, 10, null, 15],
    maxWidth: [null, null, null, 500, 600, null],
    h3: {
      fontWeight: 500,
      fontSize: [4, null, null, 8, 11],
      lineHeight: 1.5,
      letterSpacing: 'heading',
      //color: 'heading',
    },
    p: {
      mt: [3],
      maxWidth: [500],
    },
  },
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    mb: '-1px',
    img: {
      height: [180, 'auto'],
    },
  },
};
