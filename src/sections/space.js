import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { jsx, Box, Container, Text } from 'theme-ui';
import { rgba } from 'polished';
import Slider from 'react-slick';
import Image from 'components/image';
import SectionHeading from 'components/section-heading';
import { ExtraService } from 'components/cards/service';
import herobg from 'assets/images/herobg.png';
import team from 'assets/images/team.png';
import dehouse1 from 'assets/images/dehouse1.jpg';
import dehouse2 from 'assets/images/dehouse2.jpg';
import dehouse3 from 'assets/images/dehouse3.jpg';
import dehouse4 from 'assets/images/dehouse4.jpg';
import dehouse5 from 'assets/images/dehouse5.jpg';
import dehouse6 from 'assets/images/dehouse6.jpg';
import dehouse12 from 'assets/images/dehouse12.jpg';
import dehouse21 from 'assets/images/dehouse21.jpg';
import dehouse22 from 'assets/images/dehouse22.jpg';
import dehouse23 from 'assets/images/dehouse23.jpg';
import dehouse24 from 'assets/images/dehouse24.jpg';
import dehouse25 from 'assets/images/dehouse25.jpg';
import dehouse26 from 'assets/images/dehouse26.jpg';
import dehouse27 from 'assets/images/dehouse27.jpeg';
//import dehouse_2 from 'assets/images/dehouse_2.jpg';

const images = [
	dehouse21,
	//dehouse3, dehouse4, dehouse5, dehouse6, dehouse12,
	//dehouse_2,
	dehouse22, dehouse23, dehouse24, dehouse25, dehouse26, dehouse27,
	dehouse1, dehouse2
];

const activities = [
	{
		title: 'Talks',
		text: 'Workshops and discussions to inspire Work-In members and partners.',
	},
	{
		title: 'Wellness activities',
		text: 'Whether it’s yoga, surfing or running, nothing makes the brain work better than physical activity.',
	},
	{
		title: 'Social Time',
		text: 'It’s important to have a balance between work and personal life. Work-In provides moments of leisure to all its members - concerts, afternoon drinks, thematic workshops and much more.',
	},
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

export default class NextJsCarousel extends Component {
	render() {
		const settings = {
			arrows: false,
			dots: true,
			fade: true,
			infinite: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		return (
			<Box as="section" id="space" sx={styles.section}>
				<Container>
					<SectionHeading
						sx={styles.heading}
						slogan="DeHouse hub"
						sloganColor='white'
						title="You will love the views and location"
						titleColor='whitesmoke'
					/>
					<Carousel>
						{images.map((item, index) => (
							//<Image key={index} src={item} width='50%' height='50%' loading="lazy" alt="not available"/>
							<div display='flex' key={index}>
								<img fill key={index} src={item} width='100%' height='100%' loading="lazy" layout='fill' alt="image5"/>
							</div>
						))}
					</Carousel>

					<Box sx={styles.textBox}>
					<Text sx={styles.text} loading="lazy">
					2100m2 divided by 4 places and placed between Foz do Douro and Matosinhos, 
					the Edifício Transparente embraces the seafront of Porto and Matosinhos, 
					appearing at the confluence of Avenida Brasil, in Foz, with the West entrance
					of Parque da Cidade. The privileged location, views of the sea, and wide range
					of services make this space one of the best to work.
					</Text>
					</Box>
					
					<Box sx={styles.activityBox}>
						{activities.map((activity, i) => (
							<Activity key={i} activity={activity} />
						))}
					</Box>
				
					<Box sx={styles.activityBox}>
						{extraServices.map((service, i) => (
							<Service key={i} service={service} />
						))}
					</Box>
				</Container>
			</Box>
		);
	}
};

const Activity = ({ activity }) => {
  return (
    <Box sx={styles.activityBox}>
			<Text sx={styles.titleText} loading="lazy">
			{activity.title}
			</Text>
			<Text sx={styles.text} loading="lazy">
			{activity.text}
			</Text>
    </Box>
  );
};

const Service = ({ service }) => {
  return (
    <Box as='service'>
      <Text sx={styles.titleText} loading="lazy">
      {service.title}
      </Text>
      <ul>
      {service.details.map((p, i) => (
        <li key={i}>
          <Text sx={styles.text} loading="lazy">
          {p}
          </Text>
        </li>
      ))}
      </ul>
    </Box>
  );
};

/*
<Box sx={styles.grid2}>
          {extraServices.map((service, i) => (
            {//<ExtraService key={i} service={service} />
						}
						
						<Text sx={styles.titleText} loading="lazy">
						{service.title}
						</Text>
						{service.details.map((detail, i) => (
							<Text sx={styles.text} loading="lazy">
								{detail}
							</Text>
						))}
          ))}
        	</Box>
*/

const styles = {
	container: {
    pl: 0,
    pr: 0,
  },
	heading: {
		textAlign: 'center',
		mb: [7, null, null, null, 14, null, 18],
    //px: [6, null, null, 0],
    fontSize: 4,
    //backgroundColor: 'rgba(255, 106, 44, 0.95)',
    //borderRadius: 20,
  },
  section: {
		//#4329a6AA 100%
		//background: `linear-gradient(0deg, #FFFFFFFF 0%, #FFFFFFAA 4%, #FFFFFF55 8%, #FFFFFF33 12%, #FFFFFF0A 80%, #FFFFFF33 88%, #FFFFFF55 92%, #FFFFFFAA 96%, #FFFFFFFF 100%), url(${herobg})`,
		//background: `linear-gradient(0deg, #FFFFFFFF 0%, #FFFFFF88 2%, #FFFFFF11 4%, #FFFFFF11 96%, #FFFFFF88 98%, #FFFFFFFF 100%), url(${herobg})`,
		background: `linear-gradient(0deg, #FFFFFF11 0%, #FFFFFF11 100%), url(${herobg})`,
		mt: 0,
		mb: 10,
		pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 12],
    //pt: [6, null, null, 0],
    //pb: [12, null, null, 15, 17],
		//backgroundImage: `url(${background2})`,
		//backgroundImage: `url(${herobg})`,
		//backgroundColor: 'primary',
		//alignItems: 'center',
		display: 'block',
    position: 'relative',
    '@media only screen and (min-width:767px)': {
      ':before': {
        backgroundColor: 'white',
        content: `''`,
        minHeight: [null, null, null, 30, 70, 0.5],
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
      },
    },
  },
	carouselBg: {
		backgroundImage: `url(${herobg})`,
		//p: 10,
		width: '100%',
		height: '100%',
		//content: 'fill',
		//stretch: 'auto',
	},
  carousel: {
    '.slick-dots': {
      display: 'flex !important',
			margin: 0,
      padding: 0,
      bottom: [6, null, null, 8, 10],
      listStyle: 'none',
      position: 'absolute',
      left: [
        'calc(50% + 14px)',
        null,
        null,
        'calc(50% + 62px)',
        'calc(50% + 14px)',
        'calc(50% + 60px)',
        'calc(50% + 14px)',
      ],
      transform: 'translateX(-50%)',
      button: {
        backgroundColor: rgba('#5B2B9D', 0.2),
        border: 0,
        outline: 0,
        borderRadius: 5,
        cursor: 'pointer',
        height: [3, null, null, 6],
        width: [10, null, null, 15],
        overflow: 'hidden',
        textIndent: '-9999em',
        transition: 'all 0.3s ease-in-out 0s',
      },
      '.slick-active button': {
        backgroundColor: 'primary',
        width: [20, null, null, 30],
      },
    },
    li: {
      display: 'flex',
      '+ li': {
        ml: '6px',
      },
    },
  },
	textBox: {
		display: 'center',
		justifyContent: 'center',
	},
	text: {
    //background: 'red',
    fontSize: 4,
    color: "white",
    //width: 1200,
    //height: 300,
		display: 'flex',
    // alignItems: 'left',
    // alignText: 'center',
    //justifyContent: 'center',
  },
	titleText: {
		//background: 'red',
    fontSize: 4,
    color: "white",
    //width: 1200,
    //height: 300,
		display: 'flex',
    // alignItems: 'left',
    // alignText: 'center',
    //justifyContent: 'center',
		textDecoration: 'underline',
	},
	activityBox: {
		mt: 5,
	//},
	service: {
    //backgroundColor: theme.colors.taikaiPrimary, //'#4329a6',
    //border: (theme) => `2px solid ${theme.colors.borderColor}`,
		color: 'white',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    //minHeight: [107, null, null, 130],
    //textAlign: 'center',
    //transition: 'all 0.3s ease-in-out 0s',
    /*':hover': {
      boxShadow: '0px 20px 40px rgba(225, 225, 225, 0.75)',
      //borderColor: 'transparent',
      transitionDuration: '0.2s',
      transform: 'scale(1.05)',
    },*/
	},
	},
	/*grid2: {
    m: 5,
		p: 5,
    gap: 5,
    display: 'grid',
    justifyContent: 'center',
    //background: theme.colors.taikaiPrimary,
    gridTemplateColumns: [
      'repeat(2, 400px)',
    ],
    gridTemplateRows: [
      'repeat(1, 250px)',
    ],
	},*/
};