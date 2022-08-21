import { mauve } from "@radix-ui/colors";
import { styled } from "@stitches/react";

const StyledCard = styled("div", {
  borderRadius: 6,
  padding: 20,
  width: 212,
  height: 160,
  backgroundColor: "white",
  border: `1px solid ${mauve.mauve5}`,
});

const Card = ({ id }: { id: number }) => {
  return <StyledCard key={id} />;
};

export default Card;
