import React, { ReactElement } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Link, styled } from "@nextui-org/react";

export interface Props {
  href?: string;
  pathname?: string;
  title?: string;
  jsx?: ReactElement<any, any>;
  selected: boolean;
  newPost?: boolean;
  updated?: boolean;
  comingSoon?: boolean;
  color?: string;
  css?: object;
}

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;

export type NavLinkProps = Props & NativeAttrs;

const BaseLink = styled(Link, {
  d: "flex",
  textDecoration: "none",
  "@smMax": {
    pt: 0,
    pl: 0,
    pb: 0,
    d: "flex",
    ai: "center",
  },
  "&:active": {
    opacity: 0.7,
  },
  variants: {
    selected: {
      true: {
        boxSizing: "border-box",
        fontWeight: "$semibold",
        "@smMax": {
          borderLeft: "none",
          paddingLeft: 0,
        },
      },
    },
    disabled: {
      true: {
        cursor: "not-allowed",
        pe: "none",
      },
    },
  },
});

const NavLink: React.FC<NavLinkProps> = ({
  href,
  pathname,
  title,
  color,
  selected,
  comingSoon,
  onClick,
  css,
  jsx,
}) => {
  const router = useRouter();
  const onlyHashChange = pathname === router.pathname;

  if (onlyHashChange) {
    return (
      <BaseLink
        css={{
          color: color ?? "inherit",
        }}
        disabled={comingSoon}
        href={pathname}
        selected={selected}
      >
        {title}
      </BaseLink>
    );
  }

  return (
    <NextLink href={href ? (!comingSoon ? pathname || href : "") : "#"}>
      <BaseLink
        css={Object.assign(
          {
            color: color ?? "inherit",
          },
          css
        )}
        disabled={comingSoon}
        href={pathname}
        selected={selected}
        onClick={(e: any) => !comingSoon && onClick && onClick(e)}
      >
        {title ?? jsx}
      </BaseLink>
    </NextLink>
  );
};

export default NavLink;
