import NextLink from "next/link";
import { PropsWithChildren, useCallback } from "react";

interface LinkProps {
  url: string;
  isExternal?: boolean;
  asButton?: boolean;
}

const Link = ({
  isExternal,
  url,
  children,
  asButton,
}: PropsWithChildren<LinkProps>) => {
  const baseClassName =
    "hover:underline hover:decoration-c2-l underline-offset-8 hover:dark:decoration-c3-l hover:transition-opacity";
  const buttonClassName =
    "bg-c3 hover:bg-c3-l py-4 px-8 text-white font-bold uppercase text-xs rounded";

  const CustomLink = useCallback(
    () =>
      isExternal ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className={asButton ? buttonClassName : baseClassName}
        >
          {children}
        </a>
      ) : (
        <NextLink
          href={url}
          className={asButton ? buttonClassName : baseClassName}
        >
          {children}
        </NextLink>
      ),
    []
  );

  return <CustomLink />;
};

export { Link };
