import { VFC } from "react";
import { styled } from "src/styles/stitches.config";
import { AnchorLink } from "../shared/AnchorLink";

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/", label: "HOME" },
  { href: "/", label: "プライバシーポリシー" },
  { href: "/", label: "免責事項" },
];

export const Footer: VFC = () => {
  return (
    <Container>
      <Foo>
        <Nav>
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <AnchorLink href={item.href}>{item.label}</AnchorLink>
            </li>
          ))}
        </Nav>
        <small lang="en">&copy; 2021 Alacoh</small>
      </Foo>
    </Container>
  );
};

const Container = styled("footer", {
  alignItems: "center",
  display: "grid",
  placeItems: "center",
  width: "100vw",
  paddingY: "1rem",
  borderTop: `1px solid $gray6`,
  position: "absolute",
  bottom: 0,
});

const Nav = styled("ul", {
  display: "flex",
  gap: "1rem",
  marginX: "auto",
  paddingY: "0.5rem",

  "& li+li": {
    borderLeft: `1px solid $gray12`,
    paddingLeft: "1rem",
  },
});

const Foo = styled("div", {
  display: "inline-block",
  marginX: "auto",
  textAlign: "center",
});
