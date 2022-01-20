import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import NewDisneyPlus from "./NewDisneyPlus";
import Originals from "./Originals";
import Trending from "./Trending";
import Recommends from "./Recommends";
import Viewer from "./Viewer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovie } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import {
  doc,
  collection,
  query,
  where,
  onSnapshot,
  getDocs,
} from "firebase/firestore";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let trendings = [];
  let newDisneys = [];
  let originals = [];

  useEffect(async () => {
    const q = query(collection(db, "movies"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      switch (doc.data().type) {
        case "recommend":
          recommends = [...recommends, { id: doc.id, ...doc.data() }];
          break;

        case "trending":
          trendings = [...trendings, { id: doc.id, ...doc.data() }];
          break;

        case "original":
          originals = [...originals, { id: doc.id, ...doc.data() }];
          break;

        case "new":
          newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
          break;

        default:
          break;
      }

      dispatch(
        setMovie({
          recommend: recommends,
          trending: trendings,
          original: originals,
          newDisney: newDisneys,
        })
      );
    });
  }, [userName]);

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
