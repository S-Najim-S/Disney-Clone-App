import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26.21, the price of Disney+
            and the Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-image: url("/images/login-background.jpg");
  z-index: -1;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;

const CTA = styled.div`
  max-width: 40.625rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 0.7rem;
  max-width: 37.5rem;
  min-height: 10px;
  min-height: 1px;
  width: 100%;
`;

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 1.02rem;
  padding: 1rem 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 0.6875rem;
  line-height: 1.5;
  margin: 0 0 1.5rem;
  letter-spacing: 1px;
`;
const CTALogoTwo = styled.img`
  max-width: 37.5rem;
  margin-bottom: 1.25rem;
  width: 100%f;
`;
export default Login;
