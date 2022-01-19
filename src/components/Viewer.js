import styled from "styled-components";

const Viewer = (props) => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" id="vid" alt="disney-logo" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="marvel-logo" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/viewers-national.png" alt="national-logo" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/viewers-pixar.png" alt="pixar-logo" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/viewers-starwars.png" alt="starwars-logo" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1.85rem;
  padding: 1.85rem 0 1.25rem;
  display: grid;
  grid-gap: 1.25rem;
  gap: 1.25rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  position: relative;
  padding-top: 56.25%;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0, 0, 0/ 73%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    position: absolute;
    transition: opacity 0.5s ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    border: solid 3px rgb(249, 249, 249, 0.8);
    transform: scale(1.3);

    video {
      opacity: 1;
    }
  }
`;

export default Viewer;
