import {
  SpaceWrapper,
  SpaceTitle,
  SpaceInner,
  SpaceSubtitle,
  SpaceDescription,
} from "./Space.styles";
import { ImageSlider } from "./ImageSlider";

const Space = () => (
  <SpaceWrapper height={30}>
    <SpaceTitle id="space">Space</SpaceTitle>
    <SpaceSubtitle>you'll love it in here</SpaceSubtitle>
    <SpaceInner>
      <ImageSlider />
      <SpaceDescription>
        <ul>
          <li>
            <b>2100m2</b> divided by 4 places and placed between Foz do Douro
            and Matosinhos, the Edifício Transparente embraces the seafront of
            Porto and Matosinhos, appearing at the confluence of Avenida Brasil,
            in Foz, with the West entrance of Parque da Cidade. The privileged
            location, views of the sea, and wide range of services make this
            space one of the best to work.
          </li>
        </ul>
        <br />
        <b>Talks</b>
        <ul>
          <li>
            Workshops and discussions to inspire Work-In members and partners.
          </li>
        </ul>
        <br />
        <b>Wellness activities</b>
        <ul>
          <li>
            Whether it’s yoga, surfing or running, nothing makes the brain work
            better than physical activity.
          </li>
        </ul>
        <br />
        <b>Social Time</b>
        <ul>
          <li>
            It’s important to have a balance between work and personal life.
            Work-In provides moments of leisure to all its members - concerts,
            afternoon drinks, thematic workshops and much more.
          </li>
        </ul>
        <br />
        <b>Parking lot</b>
        <ul>
          <li>25€ p/month for Work-In members</li>
          <li>3 minutes walking distance</li>
          <li>Security</li>
          <li>Open 24 hours</li>
        </ul>
        <br />
        <b>Discounts</b>
        <ul>
          <li>every day 10% off At Edifício Transparente restaurants</li>
        </ul>
      </SpaceDescription>
    </SpaceInner>
  </SpaceWrapper>
);

export { Space };
