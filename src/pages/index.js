import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import About from 'sections/about';
import Services from 'sections/services';
import Space from 'sections/space';
import Pricing from 'sections/pricing';
import Team from 'sections/team';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Startup hosting provider landing"
          description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
        />
        <Banner />
        <About />
        <Services />
        <Space />
        <Pricing />
      </Layout>
    </ThemeProvider>
  );
}
