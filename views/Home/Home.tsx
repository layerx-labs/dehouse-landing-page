import { Layout } from "../../layout/Layout";

import { Hero, About, Services, Space, Pricing, Contact } from "./sections";

const Home = () => (
  <Layout>
    <Hero />
    <About />
    <Services />
    <Space />
    <Pricing />
    <Contact />
  </Layout>
);

export { Home };
