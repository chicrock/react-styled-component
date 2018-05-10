import React, { Component } from "react";
import styled, { injectGlobal, css, ThemeProvider } from "styled-components";

import theme from "./theme";

injectGlobal`
body{
  padding:0;
  margin:0;
}
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

//${awesomeCard};
/*
/// add this in shared files.
const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;


const Input = styled.input.attrs({
  required: true,
})`
  border: none;
  border-radius: 5px;
  ${awesomeCard};
`;
*/

const Card = styled.div`
  background-color: red;
`;

const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.successColor};
`;

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
);

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
