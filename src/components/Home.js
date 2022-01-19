import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import NewDisneyPlus from "./NewDisneyPlus";
import Originals from "./Originals";
import Trending from "./Trending";
import Recommends from "./Recommends";
import Viewer from "./Viewer";

const Home = (props) => {
  return (
    <Container>
      <ImageSlider />
      <Viewer />
      <Recommends />
      <NewDisneyPlus />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 15.625rem);
  overflow-x: hidden;
  display: block;
  top: 4.5rem;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat;
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
  }
`;

export default Home;
