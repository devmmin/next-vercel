import { mauve } from "@radix-ui/colors";
import { styled } from "@stitches/react";

const StyledInput = styled("input", {
  all: "unset",
  flex: "1 0 auto",
  borderRadius: 20,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  boxShadow: `0 0 0 1px ${mauve.mauve7}`,
  height: 35,
  "&:focus": { boxShadow: `0 0 0 1px ${mauve.mauve10}` },
  "&:hover": { boxShadow: `0 0 0 1px ${mauve.mauve10}` },
});

const Input = () => {
  return <StyledInput />;
};

export default Input;
