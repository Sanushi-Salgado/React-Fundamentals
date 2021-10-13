import styled from "styled-components";
import StyledButton from "./Button";

export const BlueButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: darkblue;
`;

export const RedButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: red;

  &:hover {
    background-color: coral;
  }
`;

// Creating styled components - passing a component
export const GreenButton = styled(StyledButton)`
  width: 200px;
  height: 50px;
  background-color: green;

  &:active {
    background-color: coral;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: ${(props) => props.backgroundColor};

  &:hover {
    & label {
      color: black;
    }
  }
`;

export const ButtonText = styled.label`
  font-size: 25px;
  color: white;
`;

// Creating styled components - passing HTML tags
export const Logo = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 250px;

  // Center the image
  display: block;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    transform: scaleX(-1);
  }
`;
