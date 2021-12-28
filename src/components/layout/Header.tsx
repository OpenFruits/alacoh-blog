import Image from "next/image";
import type { VFC } from "react";
import { styled } from "src/styles/stitches.config";

import { AnchorLink } from "../shared/AnchorLink";

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/", label: "home" },
  { href: "/", label: "about" },
  { href: "/", label: "profile" },
];

export const Header: VFC = () => {
  return (
    <Container>
      <AnchorLink href="/">
        <HeaderLeft>
          <Image src="/logo.png" width={56} height={56} alt="ブランドロゴ画像" />
          <H1>Alacoh Blog</H1>
        </HeaderLeft>
      </AnchorLink>

      <Nav>
        {NAV_ITEMS.map((item) => {
          return (
            <li key={item.label}>
              <AnchorLink href={item.href}>
                <h2>{item.label}</h2>
              </AnchorLink>
            </li>
          );
        })}
      </Nav>
    </Container>
  );
};

const Container = styled("header", {
  backgroundColor: "$gray2",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
  paddingY: "1rem",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  borderBottom: `1px solid $gray6`,
  position: "fixed",
  top: 0,
  zIndex: 1,
});

const HeaderLeft = styled("div", {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
});

const H1 = styled("h1", {
  fontSize: "2rem",
});

const Nav = styled("ul", {
  display: "flex",
  gap: "4rem",
  paddingRight: "6rem",
});
