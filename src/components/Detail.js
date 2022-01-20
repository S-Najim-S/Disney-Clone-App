import styled from "styled-components";
import db from "../firebase";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  doc,
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(async () => {
    const q = query(collection(db, "movies"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.id === id) {
        if (doc.exists) {
          setDetailData(doc.data());
          console.log("docData:", doc.data());
        } else {
          console.log("no such data in firebase");
        }
      }
      // doc.data() is never undefined for query doc snapshots
    });
  }, [id]);
  console.log("Heelo", detailData);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImageTitle>
        <img alt="" src={detailData.titleImg} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="play-btn" />
            <span>Play</span>
          </Player>

          <Trailer>
            <img src="/images/play-icon-white.png" alt="play-btn" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>

          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="play-btn" />
            </div>
          </GroupWatch>
        </Controls>

        <Subtitle>{detailData.subTitle}</Subtitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 4.5rem;
  padding: 0 calc(3.5vw - 5px);
`;

const Background = styled.div`
  left: 0;
  opacity: 0.8;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  height: 30vw;
  min-height: 10.5rem;
  padding-bottom: 1.6rem;

  img {
    max-width: 37rem;
    min-width: 12.5;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 54.75rem;
`;

const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 1.6rem 0;
  min-height: 3.5;
`;

const Player = styled.button`
  font-size: 1rem;
  margin: 0 1.3rem 0 0;
  padding: 0 1.6rem;
  height: 3.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.5px;
  text-align: center;
  text-transform: uppercase;
  background: rgb(249, 249, 249);
  border: none;
  color: rgb(0, 0, 0);

  img {
    width: 2rem;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 2.8rem;
    padding: 0 0.75rem;
    font-size: 0.75rem;
    margin: 0 0.7rem 0 0;

    img {
      width: 1.5rem;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddList = styled.div`
  margin-right: 1rem;
  height: 2.75rem;
  width: 2.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;

    &:first-child {
      width: 16px;
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
    }
    &:last-child {
      height: 16px;
      width: 2px;
      transform: translate(-8px) rotate(0deg);
    }
  }
`;

const GroupWatch = styled.div`
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;

  div {
    height: 2.5rem;
    width: 2.5rem;
    background: rgb(0, 0, 0);
    border-radius: 50%;

    img {
      width: 100%;
    }
  }
`;
const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 1rem;
  min-height: 1.4rem;

  @media (max-width: 786px) {
    font-size: 0.75rem;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 1.4rem;
  padding: 1rem 0;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;
export default Detail;
