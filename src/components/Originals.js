import styled from "styled-components";
import { Link } from "react-router-dom";

const Originals = (props) => {
  return (
    <Container>
      <h4>Disney+ Originals</h4>
      <Content>
        <Wrap>
          <Link to="/">
            <img
              src="https://www.teahub.io/photos/full/55-559511_disney-plus-the-mandalorian-poster.jpg"
              alt="man-poster"
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img
              src="https://www.teahub.io/photos/full/55-559511_disney-plus-the-mandalorian-poster.jpg"
              alt="man-poster"
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img
              src="https://www.teahub.io/photos/full/55-559511_disney-plus-the-mandalorian-poster.jpg"
              alt="man-poster"
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img
              src="https://www.teahub.io/photos/full/55-559511_disney-plus-the-mandalorian-poster.jpg"
              alt="man-poster"
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img
              src="https://www.teahub.io/photos/full/55-559511_disney-plus-the-mandalorian-poster.jpg"
              alt="man-poster"
            />
          </Link>
        </Wrap>

        <Wrap>
          <Link to="/">
            <img
              src="https://www.teahub.io/photos/full/55-559511_disney-plus-the-mandalorian-poster.jpg"
              alt="man-poster"
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};
const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border: solid 3px rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0, 0, 0/ 73%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  img {
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }
  &:hover {
    box-shadow: rgb(0, 0, 0/ 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 73%) 0 30px 20px -10px;
    transform: scale(1.1);
  }
`;

export default Originals;
