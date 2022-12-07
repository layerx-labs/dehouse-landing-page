import AboutBackground from "../../../../components/Backgrounds/About";
import Taikai from "../../../../components/Backgrounds/Taikai";
import Workin from "../../../../components/Backgrounds/Workin";
import {
  AboutWrapper,
  AboutInner,
  AboutTitle,
  AboutContent,
} from "./About.styles";

const About = () => (
  <AboutWrapper height={40} mHeight={55}>
    <AboutBackground />
    <AboutInner id="about">
      <AboutTitle>What is it?</AboutTitle>
      <AboutContent>
        <p>
          <b>DeHouse</b> is an informal and dynamic space, exclusively dedicated
          to the ecosystem of Web3 organizations. The objective is to create a
          great vibe and flexible environment, with a decentralized workspace to
          enhance a positive work culture.
        </p>
        <br />
        <p>
          A space with a strong sense of community, where everything can be
          co-developed, co-created, and co-shared. The place where we can meet
          people with the same interests, generate and discuss new ideas,
          creating synergies.
        </p>
        <br />
        <p>
          Gather the right tools to ensure greater productivity in our work, an
          efficient network, and the perfect work/life balance.
        </p>
      </AboutContent>
      <div className="flex justify-evenly items-center">
        <a
          href="https://www.taikai.network/"
          target={"_blank"}
          className="hover:expandable basis-1/2"
          style={{ maxWidth: "25%" }}
          aria-label="Taikai"
        >
          <Taikai />
        </a>
        <a
          href="https://www.workin.pro/"
          target={"_blank"}
          className="hover:expandable basis-1/2"
          style={{ maxWidth: "25%" }}
          aria-label="Workin"
        >
          <Workin />
        </a>
      </div>
    </AboutInner>
  </AboutWrapper>
);

export { About };
