import { mauve } from "@radix-ui/colors";
import { styled } from "@stitches/react";

import Input from "./Input";
import Tab from "./Tab";

const fixWidth = {
  width: "1170px",
  margin: "auto",
};

const StyledHeader = styled("header", {
  display: "flex",
  borderBottom: `1px solid ${mauve.mauve5}`,
  position: "sticky",
  top: 0,
  zIndex: 20,
  backgroundColor: "#ffffff",
});

const StyledSection = styled("section", {
  height: 80,
  display: "flex",
  alignItems: "center",
});

const StyledContainer = styled("div", {
  ...fixWidth,
});

const StyledWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const Form = styled("form", {
  maxWidth: 300,
});

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledWrapper>
          <b>MING</b>
          <StyledSection>
            <Form>
              <Input />
            </Form>
          </StyledSection>
        </StyledWrapper>
        <Tab />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
