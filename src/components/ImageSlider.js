import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImageSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 1.25rem;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &::before {
      font-size: 0.75rem;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -4.687rem;
  }

  .slick-next {
    right: -4.687rem;
  }
`;

const Wrap = styled.div`
  border-radius: 0.25rem;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 0.25rem;
    box-shadow: rgb(0 0 0 / 69%) 0 1.635rem 1.875rem -0.625rem,
      rgb(0 0 0 / 73%) 0 1rem 0.625rem -0.625rem;

    cursor: pointer;
    display: block;
    position: relative;
    padding: 0.25rem;
  }

  img {
    width: 100%;
    height: 100%;

    &:hover {
      padding: 0;
      border: 0.25rem solid rgba(249, 249, 249, 0.8);
      transition-duration: 0.3s;
    }
  }
`;

export default ImageSlider;
