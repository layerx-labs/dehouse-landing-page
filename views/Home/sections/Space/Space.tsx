import {
  SpaceWrapper,
  SpaceTitle,
  SpaceInner,
  SpaceSubtitle,
  SpaceDescription,
  SpaceDescriptionInit,
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
            <SpaceDescriptionInit>2100m2</SpaceDescriptionInit> divided by 4
            places and placed between Foz do Douro and Matosinhos, the Edifício
            Transparente embraces the seafront of Porto and Matosinhos,
            appearing at the confluence of Avenida Brasil, in Foz, with the West
            entrance of Parque da Cidade. The privileged location, views of the
            sea, and wide range of services make this space one of the best to
            work.
          </li>
        </ul>
        <br />
        <SpaceDescriptionInit>Talks</SpaceDescriptionInit>
        <ul>
          <li>
            Workshops and discussions to inspire Work-In members and partners.
          </li>
        </ul>
        <br />
        <SpaceDescriptionInit>Wellness activities</SpaceDescriptionInit>
        <ul>
          <li>
            Whether it’s yoga, surfing or running, nothing makes the brain work
            better than physical activity.
          </li>
        </ul>
        <br />
        <SpaceDescriptionInit>Social Time</SpaceDescriptionInit>
        <ul>
          <li>
            It’s important to have a balance between work and personal life.
            Work-In provides moments of leisure to all its members - concerts,
            afternoon drinks, thematic workshops and much more.
          </li>
        </ul>
        <br />
        <SpaceDescriptionInit>Parking lot</SpaceDescriptionInit>
        <ul>
          <li>25€ p/month for Work-In members</li>
          <li>3 minutes walking distance</li>
          <li>Security</li>
          <li>Open 24 hours</li>
        </ul>
        <br />
        <SpaceDescriptionInit>Discounts</SpaceDescriptionInit>
        <ul>
          <li>every day 10% off At Edifício Transparente restaurants</li>
        </ul>
      </SpaceDescription>
    </SpaceInner>
  </SpaceWrapper>
);

export { Space };
