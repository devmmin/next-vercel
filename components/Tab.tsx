import { mauve } from "@radix-ui/colors";
import * as Tabs from "@radix-ui/react-tabs";
import { styled } from "@stitches/react";

const StyledTabs = styled(Tabs.Root, {
  display: "flex",
  flexDirection: "column",
  width: 300,
});

const StyledList = styled(Tabs.List, {
  flexShrink: 0,
  display: "flex",
});

const StyledTrigger = styled(Tabs.Trigger, {
  all: "unset",
  fontFamily: "inherit",
  backgroundColor: "white",
  padding: "0 20px",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 15,
  lineHeight: 1,
  color: mauve.mauve12,
  userSelect: "none",
  '&[data-state="active"]': { textDecoration: "underline" },
});

const Tab = () => {
  return (
    <StyledTabs defaultValue="HOME">
      <StyledList aria-label="Global Navigation Bar">
        <StyledTrigger value="HOME">홈</StyledTrigger>
        <StyledTrigger value="LIST">프로젝트 리스트</StyledTrigger>
      </StyledList>
    </StyledTabs>
  );
};

export default Tab;
