import { styled } from "@stitches/react";
import useSWR from "swr";

import Card from "../components/Card";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const fixWidth = {
  width: "1170px",
  margin: "auto",
};

const StyledContent = styled("div", {
  ...fixWidth,
  display: "flex",
  paddingTop: 32,
});

const StyledAside = styled("aside", {
  width: "200px",
});

const StyledMain = styled("main", {
  display: "flex",
  flexWrap: "wrap",
});

const StyledFooter = styled("footer", fixWidth);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function Main() {
  const { data, error } = useSWR("/api/nav", fetcher);
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <Header />
      <StyledContent>
        <StyledAside>
          <Navigation list={data} />
        </StyledAside>
        <StyledMain>
          {new Array(40).fill(0).map((v, index) => {
            return <Card id={index} />;
          })}
        </StyledMain>
      </StyledContent>
      <StyledFooter />
    </>
  );
}

export default Main;
