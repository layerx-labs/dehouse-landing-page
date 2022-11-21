import tw from "../../components/tw";

const FooterLink = tw.div`text-c2 hover:text-c2-l dark:text-c2-l dark:hover:text-c3-l`;

const FooterLinks = tw.div`mb-2 flex flex-wrap justify-around`;

const FooterContainer = tw.div`flex min-h-full min-w-full flex-col justify-between`;

const FooterWrapper = tw.footer`w-full bg-c1-l p-8 px-4 font-semibold text-c4`;

export { FooterWrapper, FooterContainer, FooterLinks, FooterLink };
