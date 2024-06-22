import React from 'react';
import { styled } from 'styled-components';

const Button = styled.button`
  padding: 0.3rem 0.6rem;
  border: 1px dark grey
  border-radius: 2rem;
  background-color: ${(props) => props.$backgroundColor};
`;

const Buttons = (props) => {
  return (
    <Button $backgroundColor={props.$backgroundColor}>{props.children}</Button>
  );
};

export default Buttons;
