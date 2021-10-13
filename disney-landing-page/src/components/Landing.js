import styled from "styled-components";
import logoOne from "../images/logoOne.png";
import logoTwo from "../images/logoTwo.png";
import background from "../images/background.jpg";

// A functional component
const Landing = (props) => {
  return (
    <Container>
      <Content>
        {" "}
        <BgImage />
        {/*holder for the landing page back-ground image should be here*/}
        <CTA>
          <LogoOne src={logoOne} alt="" />
          {/*holder for your logo-one should be here, to be styled as imgage*/}
          <Signup>GET IT ALL HERE</Signup>
          <Description>
            {/*holder for a paragraph of text to be styled as p tag*/}
            Get premium access to raya and the latest dragon show with a Disney+
            subscription. As of 03/04/2021 , the price of Disney+ and the Disney
            bundle will increase by $1.
          </Description>
          <LogoTwo src={logoTwo} alt="" />{" "}
          {/*holder for your logo-two should be here, to be styled as image*/}
        </CTA>
      </Content>
    </Container>
  );
};
export default Landing;

{
  /*Container is declared in JavaScript and styled. Section is assigned to it*/
}
{
  /*then CSS code is written within backticks to act on the Container*/
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

{
  /*Content is declared in JavaScript and styled.div is assigned to it*/
}
{
  /*CSS code is written within backticks(tagged-template literals) to render all content inside a div*/
}

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
  padding: 80px 40px;
  height: 100%;
`;

{
  /*BgImage is declared in JavaScript and styled.div is assigned to it*/
}
{
  /*CSS code is written within backticks(tagged-template literals) to render the image inside a div*/
}

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  background-image: url('data:image/jpeg;base64,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');
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

{
  /*The CTA will hold both the two logos and the description. It is styled as a div*/
}
const CTA = styled.div`
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
`;

{
  /*LogOne styled as an image to render the img tag*/
}
{
  /*CSS is to define height, width, margin*/
}
const LogoOne = styled.img`
  margin-bottom: 12px;
  background-color: none;
  max-width: 700px;
  min-height: 60px;
  display: block;
  width: 100%;
`;

{
  /*SignUp is styled to wrap around a text and appear as button.It is styled as anchor tag*/
}
{
  /*CSS is to used define how it should appear*/
}
const Signup = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 25px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

{
  /*holder for a paragraph of text to be styled as p tag. This will render a styled paragraph*/
}
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 14px;
  margin: 0 0 24px;
  line-height: 1.5em;
  letter-spacing: 1.5;
`;

{
  /*It is styled as an image to render the img tag*/
}
{
  /*CSS is to define height, width, margin*/
}
const LogoTwo = styled.img`
  margin-bottom: 20px;
  max-width: 700px;
  min-height: 60px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;
