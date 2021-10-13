import styled from "styled-components";
import disney_icon from "../images/disney_icon.png";

// This component will render a Navbar before styling.
const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src={disney_icon} alt="Disney+" />
      </Logo>
    </Nav>
  );
};

export default Header;


{/*Styling with  .nav to render the Nav tag*/} 
const Nav = styled.nav`
position: fixed;   //sets the nav as fixed regardless of any scroll behaviour.
top: 0;
left: 0;
right: 0;
height:70px;                //defines the height of the navbar
background-color: #090b13;  //gives the nav a background a color
display: flex;
justify-content: space-between; //creates space between nav elements
align-items: center;
padding: 0 36px;
letter-spacing: 16px;     
z-index:3;      //sets priority level for the navbar against other elements

`;
{/*Styling the Logo with .a to render the image as an anchor*/}  
const Logo = styled.a` 
padding:0;
width:80px;
margin-top:4px;
max-height:70px;
display: inline-block;
font-size:0;

img{
    display: block;
    width:100%;
   
}
`;
