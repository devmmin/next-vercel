import { mauve } from "@radix-ui/colors";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { styled } from "@stitches/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const StyledMenu = styled(NavigationMenu.Root, {
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  width: "100vw",
  zIndex: 1,
});

const StyledList = styled(NavigationMenu.List, {
  all: "unset",
  display: "block",
  justifyContent: "center",
  backgroundColor: "white",
  padding: 4,
  borderRadius: 6,
  listStyle: "none",
});

const StyledLink = styled(NavigationMenu.Link, {
  color: mauve.mauve12,
  textDecoration: "none",
  "&[data-active]": { textDecoration: "underline" },
});

const Link = ({ href, ...props }: { href: string; children: ReactNode }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href} passHref>
      <StyledLink active={isActive} {...props} />
    </NextLink>
  );
};

function Navigation({ list }: { list: Array<string> }) {
  return (
    <StyledMenu orientation="vertical">
      <StyledList>
        {list.map((nav: string) => {
          return (
            <NavigationMenu.Item key={nav}>
              <Link href={`/main?category=${encodeURIComponent(nav)}`}>
                {nav}
              </Link>
            </NavigationMenu.Item>
          );
        })}
      </StyledList>
      <NavigationMenu.Viewport />
    </StyledMenu>
  );
}

export default Navigation;
