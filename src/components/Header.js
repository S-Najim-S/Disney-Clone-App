import styled from "styled-components";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  const authHandler = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        navigate("/");
      });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney-plus" />
      </Logo>

      {!userName ? (
        <Login onClick={authHandler}>Login</Login>
      ) : (
        <Fragment>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="HOME" />
              <span>Home</span>
            </a>

            <a href="/search">
              <img src="/images/search-icon.svg" alt="search" />
              <span>Search</span>
            </a>

            <a href="/watchlist">
              <img src="/images/watchlist-icon.svg" alt="watchlist" />
              <span>Watchlist</span>
            </a>

            <a href="/original">
              <img src="/images/original-icon.svg" alt="original" />
              <span>Originals</span>
            </a>

            <a href="/movie">
              <img src="/images/movie-icon.svg" alt="movie" />
              <span>Movies</span>
            </a>
            <a href="/series">
              <img src="/images/series-icon.svg" alt="series" />
              <span>Series</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={authHandler}>Sign out</span>
            </DropDown>
          </SignOut>
        </Fragment>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 4.375rem;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.05rem;
  letter-spacing: 0.5rem;
  z-index: 3;
`;
const Logo = styled.a`
  padding: 0;
  width: 5rem;
  margin-top: 0.25rem;
  max-height: 4.375rem;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    /* display: none; */
  }
`;

const Login = styled.a`
  letter-spacing: 5px;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 3.125rem;
  right: 2.5rem;
  background: rgb(19, 19, 19);
  border: solid 1px rgba(151, 151, 151, 0.34);
  letter-spacing: 2px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;
const SignOut = styled.div`
  position: relative;
  height: 3.125rem;
  width: 3.125rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
export default Header;
