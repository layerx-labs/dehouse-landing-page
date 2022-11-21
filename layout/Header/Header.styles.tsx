import Link from "next/link";
import tw from "../../components/tw";

const HeaderLogo = tw.div`header-logo text-c2 hover:text-c2-l dark:text-c2-l dark:hover:text-c3-l md-max:text-sm font-semibold`;

const HeaderLink = tw(Link)`font-light hover:font-semibold mx-1 md-max:text-sm`;

const HeaderWrapper = tw.header`header flew-row flex align-center items-center justify-between bg-transparent p-4 text-xl font-semibold`;

export { HeaderWrapper, HeaderLogo, HeaderLink };
