import logo from "../../images/logo.jpg";
import {
  Logo,
  Button,
  ButtonText,
  BlueButton,
  GreenButton,
  RedButton,
} from "./ComponentStyles";
import { PageGlobalStyles } from "./GlobalStyles";

export default function StyledComponentsDemo() {
  return (
    <div>
      <PageGlobalStyles />
      <Logo src={logo} />
      <BlueButton>Click Me</BlueButton>
      <GreenButton buttonLabel="Click here" />
      <RedButton>Click Me</RedButton>
      <Button backgroundColor="grey">Click Me</Button>
      <Button backgroundColor="crimson">
        <ButtonText>Click Me</ButtonText>
      </Button>
    </div>
  );
}
